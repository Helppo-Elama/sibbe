<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Http\Controllers\Api\Restaurant\RestaurantDataHarvester;

use App\Http\Controllers\Controller;

class RestaurantController extends Controller
{
    public function get()
    {
        $lunches = RestaurantDataHarvester::getLunches();
        $menu_items = RestaurantDataHarvester::getMenu();
        //$events = RestaurantDataHarvester::getEvents();
        $service_hours = RestaurantDataHarvester::getServiceHours();
        return response([
            "lunches" => $lunches,
            "menu" => $menu_items,
            //"events" => $events,
            "service_hours" => $service_hours
        ], 200);
    }
}
