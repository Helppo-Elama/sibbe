<?php

namespace App\Http\Controllers\Web\ServiceHours;


use Illuminate\Http\Request;
use App\Models\ServiceHours\ServiceHour;
use Inertia\Inertia;


use App\Http\Controllers\Controller;

class ServiceHourController extends Controller
{
    public function getRestaurantAndCafe()
    {
        $data = ServiceHour::getRestaurantAndCafe();
        return Inertia::render("ServiceHours/ServiceHours", [
            "data" => $data
        ]);
    }

    public function getPresistentLunch()
    {
        $data = ServiceHour::getPresistentLunch();
        return response()->json($data, 200);
    }

    public function getClosedUntil(Request $request)
    {
        $data = ServiceHour::getClosedUntil($request);
        return response()->json($data, 200);
    }

    public function post(Request $request)
    {
        $data = ServiceHour::post($request);
        return response()->json($data, 200);
    }
}
