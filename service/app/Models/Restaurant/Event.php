<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Event extends Model
{

    use HasFactory;

    protected $table = "restaurant_events";
    protected $fillable = ["location", "start", "end", "title", "body", "price", "priceAdditional", "json", "servingTime", "icon", "images"];
    protected $attributes = [
        "location" => null,
        "start" => null,
        "end" => null,
        "title" => null,
        "body" => null,
        "price" => null,
        "priceAdditional" => null,
        "json" => null,
        "servingTime" => null,
        "icon" => null,
        "images" => null,
    ];

    public static function get()
    {
        $event = Event::all();
        $event->makeHidden(["created_at", "updated_at"]);
        foreach ($event as $e) {
            $e->json = json_decode($e->json);
        }
        return $event;
    }

    public static function apiGet()
    {
    }
}
