<?php

namespace App\Models\Defaults;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class RestaurantDefault extends Model
{

    use HasFactory;


    protected $table = "restaurant_defaults";
    protected $fillable = ["title", "json", "number", "text"];
    protected $attributes = [
        "title" => null,
        "json" => null,
        "number" => null,
        "text" => null,
    ];
}
