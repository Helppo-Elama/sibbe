<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Data extends Model
{

    use HasFactory;

    protected $table = "restaurant_data_items";
    protected $fillable = ["title", "description", "json"];
    protected $attributes = [
        "title" => null,
        "description" => null,
        "json" => null,
    ];

    public static function getPresistentLunch(): mixed
    {
        $data = Data::where(["title" => "presistent_lunch_data"])->get()->first();
        $json = json_decode($data->json);
        return $json;
    }
    public static function postPresistentLunch(Request $request) //: string
    {
        $start = $request->start;
        $end = $request->end;
        $enabled = $request->enabled;
        $portions = $request->portions;
        $data = new Data;
        $data->where(["title" => "presistent_lunch_data"]);
        return "Lounastiedot päivitetty!";
    }
}
