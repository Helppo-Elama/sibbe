<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Lunch extends Model
{

    use HasFactory;


    protected $table = "restaurant_lunches";
    protected $fillable = ["date", "price", "type", "json", "serving_time"];
    protected $attributes = [
        "json" => null,
        "type" => null,
        "price" => null,
        "serving_time" => null,
    ];
}
