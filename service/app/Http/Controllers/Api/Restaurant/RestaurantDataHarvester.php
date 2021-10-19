<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Models\Restaurant\Menu;
use App\Models\Restaurant\Lunch;
use App\Models\Defaults\RestaurantDefault;
use App\Models\Restaurant\Event;
use App\Models\ServiceHours\ServiceHour;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class RestaurantDataHarvester
{

    public static function getLunches(): Collection
    {
        $start = date("Y-m-d");
        $defaults = RestaurantDefault::where(["title" => "lunch"])->first()->toArray();
        $end = date("Y-m-d", strtotime($start . " + " . $defaults["number"] . " days"));

        $lunches = Lunch::whereBetween("date", [$start, $end])->orderBy("date", "asc")->get();
        foreach ($lunches as $lunch) {
            $lunch->json = json_decode($lunch->json);
            $lunch->serving_time = json_decode($lunch->serving_time);
        }
        return $lunches;
    }

    public static function getMenu(): Collection
    {
        $menu_items = Menu::all();
        foreach ($menu_items as $item) {
            $item->json = json_decode($item->json);
        }
        return $menu_items;
    }

    public static function getEvents(): Builder
    {

        $events =  Event::whereDate('date', '>=', \Carbon\Carbon::now('Europe/Helsinki'));
        foreach ($events as $event) {
            $event->json = json_decode($event->json);
            $event->serving_time = json_decode($event->serving_time);
        }
        return $events;
    }

    public static function getServiceHours(): ServiceHour
    {
        $service_hour_item = ServiceHour::where(["title" => "restaurant"])->get()->first();
        $service_hour_item->json = json_decode($service_hour_item->json);
        return $service_hour_item;
    }
}
