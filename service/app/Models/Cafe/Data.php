<?php

namespace App\Models\Cafe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Data extends Model
{

    use HasFactory;


    protected $table = "cafe_data";
    protected $fillable = ["json"];
    protected $attributes = [
        "json" => null,
    ];
}
