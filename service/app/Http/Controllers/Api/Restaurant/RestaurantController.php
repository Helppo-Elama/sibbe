<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Http\Controllers\Api\Restaurant\RestaurantDataHarvester;

use App\Http\Controllers\Controller;

class RestaurantController extends Controller
{
    public function get()
    {
        $lunches = RestaurantDataHarvester::getLunches();
        //$presistent_lunches = RestaurantDataHarvester::getPresistentLunch();
        $menu_items = RestaurantDataHarvester::getMenu();
        //$events = RestaurantDataHarvester::getEvents();
        $service_hours = RestaurantDataHarvester::getServiceHours();
        return response()->json([
            "lunches" => $lunches,
            //"presistentLunches" => $presistent_lunches,
            "menu" => $menu_items,
            //"events" => $events,
            "serviceHours" => $service_hours
        ], 200);
    }
}
