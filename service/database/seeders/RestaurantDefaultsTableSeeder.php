<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Defaults\RestaurantDefault;
use Illuminate\Support\Facades\DB;


class RestaurantDefaultsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table("restaurant_defaults")->delete();
        RestaurantDefault::create(array("title" => "lunch", "json" => null));
    }
}
