<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServiceHours\ServiceHour;
use Illuminate\Support\Facades\DB;

class ServiceHoursTableSeeder extends Seeder
{
    public function run()
    {
        $week_days = [["day" => "sunnuntai"], ["day" => "maanantai"], ["day" => "tiistai"], ["day" => "keskiviikko"], ["day" => "torstai"], ["day" => "perjantai"], ["day" => "lauantai"]];
        DB::table("service_hours")->delete();
        ServiceHour::create(array("title" => "restaurant", "json" => json_encode($week_days)));
        ServiceHour::create(array("title" => "cafe", "json" => json_encode($week_days)));
        ServiceHour::create(array("title" => "presistent_lunch", "json" => json_encode($week_days)));
    }
}
