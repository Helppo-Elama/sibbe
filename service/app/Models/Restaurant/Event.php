<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Event extends Model
{

    use HasFactory;

    protected $table = "restaurant_events";
    protected $fillable = ["date", "title", "price", "price_additional", "json", "serving_time", "icon"];
    protected $attributes = [
        "title" => null,
        "price" => null,
        "price_additional" => null,
        "icon" => null,
        "json" => null,
        "serving_time" => null,
    ];
}
