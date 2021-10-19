<?php

namespace App\Http\Controllers\Api\ServiceHours;


use Illuminate\Http\Request;
use App\Models\ServiceHours\ServiceHour;


use App\Http\Controllers\Controller;

class ServiceHourController extends Controller
{
    public function get(Request $request)
    {

        $service_hour_items = ServiceHour::where(["title" => $request->title])->get();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return response($service_hour_items, 200);
    }
    public function getClosedUntil(Request $request)
    {
        $service_hour_items = ServiceHour::where(["title" => $request->title])->get();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return response($service_hour_items[0]->closed_until, 200);
    }
}
