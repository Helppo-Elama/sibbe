<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Models\Restaurant\Menu;
use App\Models\Restaurant\Lunch;
use App\Models\Restaurant\Data;
use App\Models\Defaults\RestaurantDefault;
use App\Models\Events\Event;
use App\Models\ServiceHours\ServiceHour;
use Illuminate\Database\Eloquent\Collection;
use DateTime;

class RestaurantDataHarvester
{

    public static function getLunches() //: Collection
    {
        $presistent_lunch_data = Data::getPresistentLunch();
        if ($presistent_lunch_data->enabled === true) {
            $presistent_lunch_service_hours = ServiceHour::getPresistentLunch();
            $date = new DateTime(date("Y-m-d"));
            $start = new DateTime($presistent_lunch_service_hours["start"]);
            $end = new DateTime($presistent_lunch_service_hours["end"]);
            if ($date->getTimestamp() > $start->getTimestamp() && $date->getTimestamp() < $end->getTimestamp()) {
                return ["presistentLunch" => $presistent_lunch_data, "serviceHours" => $presistent_lunch_service_hours];
            };
        };
        $start = date("Y-m-d");
        $defaults = RestaurantDefault::where(["title" => "lunch"])->first()->toArray();
        $json = json_decode($defaults["json"]);
        $end = date("Y-m-d", strtotime($start . " + " . $json->days . " days"));

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
        $service_hour_item = ServiceHour::where(["title" => "restaurant"])->get()->first();
        $service_hour_item->json = json_decode($service_hour_item->json);
        return $service_hour_item;
    }
}
