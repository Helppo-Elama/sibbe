<?php

namespace App\Http\Controllers\Api\Cafe;

use App\Http\Controllers\Api\Cafe\CafeDataHarvester;

use App\Models\Cafe\Cafe;
use App\Http\Controllers\Controller;

class CafeController extends Controller
{
    public function get()
    {
        $data = Cafe::all();
        $menu_items = CafeDataHarvester::getMenu();
        //$events = CafeDataHarvester::getEvents();
        $service_hours = CafeDataHarvester::getServiceHours();
        return response([
            "menu" => $menu_items,
            //"events" => $events,
            "service_hours" => $service_hours,
        ], 200);
    }
}
