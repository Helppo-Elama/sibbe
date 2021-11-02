<?php

namespace App\Http\Controllers\Api\Cafe;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\Cafe\CafeDataHarvester;

class CafeController extends Controller
{
    public function get()
    {
        $menu_items = CafeDataHarvester::getMenu();
        //$events = CafeDataHarvester::getEvents();
        $service_hours = CafeDataHarvester::getServiceHours();
        return response()->json([
            "menu" => $menu_items,
            //"events" => $events,
            "serviceHours" => $service_hours,
        ], 200);
    }
}
