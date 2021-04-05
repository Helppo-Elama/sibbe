<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Lunch extends Model
{

    use HasFactory;


    protected $table = "restaurant_lunches";
    protected $fillable = ["date", "hours", "price", "type", "json"];
    protected $attributes = [
        "json" => null,
        "hours" => null,
        "type" => null,
        "price" => null,
    ];
}
