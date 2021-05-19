<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Data extends Model
{

    use HasFactory;


    protected $table = "restaurant_datas";
    protected $fillable = ["title", "json"];
    protected $attributes = [
        "title" => null,
        "json" => null,
    ];
}
