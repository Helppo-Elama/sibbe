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

    public static function getPresistentLunch() //: Mixed
    {
        $data = Data::where(["title" => "presistent_lunch_data"])->get()->first();
        $json = json_decode($data->json);
        return $json;
    }
    public static function postPresistentLunchData(string $json) //: String
    {
        $data = new Data;
        $data->where(["title" => "presistent_lunch_data"])->update(["json" => $json]);
        return "Lounastiedot päivitetty!";
    }

    public static function deletePresistentLunchDataPortions(string $portions) //: String
    {
        $data = new Data;
        $data->where(["title" => "presistent_lunch_data"])->update(["json->portions" => $portions]);
        return "Annos poistettu";
    }
}
