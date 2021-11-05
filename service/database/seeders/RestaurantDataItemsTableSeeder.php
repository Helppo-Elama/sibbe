<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Restaurant\Data;
use Illuminate\Support\Facades\DB;


class RestaurantDataItemsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table("restaurant_data_items")->delete();
        $json = ["enabled" => "", "portions" => []];
        Data::create(array("title" => "presistent_lunch_data", "description" => "Holds JSON data for presistent lunches. See service_hours for dates and times", "json" => json_encode($json)));
    }
}
