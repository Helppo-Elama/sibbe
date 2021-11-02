<?php

namespace App\Http\Controllers\Api\Cafe;

use App\Models\Cafe\Cafe;
use App\Models\Events\Event;
use App\Models\ServiceHours\ServiceHour;
use Illuminate\Database\Eloquent\Collection;

class CafeDataHarvester
{

    public static function getMenu(): Collection
    {
        $menu_items = Cafe::all();
        foreach ($menu_items as $item) {
            $item->json = json_decode($item->json);
        }
        return $menu_items;
    }
    /*
    public static function getEvents(): Builder
    {

        $events =  Event::whereDate('date', '>=', \Carbon\Carbon::now('Europe/Helsinki'));
        foreach ($events as $event) {
            $event->json = json_decode($event->json);
            $event->serving_time = json_decode($event->serving_time);
        }
        return $events;
    }
*/
    public static function getServiceHours(): ServiceHour
    {
        $service_hour_item = ServiceHour::where(["title" => "cafe"])->get()->first();
        $service_hour_item->json = json_decode($service_hour_item->json);
        return $service_hour_item;
    }
}
