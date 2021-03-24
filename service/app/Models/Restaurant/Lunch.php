<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Lunch extends Model
{

    use HasFactory;


    protected $table = "restaurant_lunches";
    protected $fillable = ["date", "json"];
    protected $attributes = [
        "json" => null,
    ];
}
