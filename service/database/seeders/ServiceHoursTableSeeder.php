<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServiceHours\ServiceHour;
use Illuminate\Support\Facades\DB;

class ServiceHoursTableSeeder extends Seeder
{
    public function run()
    {
        DB::table("service_hours")->delete();
        ServiceHour::create(array("title" => "restaurant", "json" => null));
        ServiceHour::create(array("title" => "cafe", "json" => null));
    }
}
