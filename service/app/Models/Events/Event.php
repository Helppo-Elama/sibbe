<?php

namespace App\Models\Events;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Event extends Model
{

    use HasFactory;

    protected $table = "cafe_events";
    protected $fillable = ["location", "date_string", "date_start", "date_end", "title", "body", "price", "price_additional", "json", "serving_time", "icon"];
    protected $attributes = [
        "location" => null,
        "date_string" => null,
        "date_start" => null,
        "date_end" => null,
        "title" => null,
        "body" => null,
        "price" => null,
        "price_additional" => null,
        "json" => null,
        "serving_time" => null,
        "icon" => null,
    ];
}
