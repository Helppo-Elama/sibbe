<?php

namespace App\Http\Controllers\Web\ServiceHours;


use Illuminate\Http\Request;
use App\Models\ServiceHours\ServiceHour;
use Inertia\Inertia;


use App\Http\Controllers\Controller;

class ServiceHourController extends Controller
{
    public function get(Request $request)
    {
        $service_hour_items = ServiceHour::all();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return Inertia::render('ServiceHours/ServiceHours', [
            "data" => $service_hour_items
        ]);

        $service_hour_items = ServiceHour::where(["title" => $request->title])->get();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return response()->json($service_hour_items, 200);
    }
    public function getClosedUntil(Request $request)
    {
        $service_hour_items = ServiceHour::where(["title" => $request->title])->get();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return response()->json($service_hour_items[0]->closed_until, 200);
    }
    public function post(Request $request)
    {
        ServiceHour::where(["title" => $request->title])
            ->update(["closed_until" => $request->closed_until, "json" => $request->json]);

        $title = __($request->title);
        return response()->json(["message" => "Aukioloajat " . $title . "lle on päivitetty"], 200);
    }
}
