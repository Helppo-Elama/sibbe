<?php

namespace App\Http\Controllers\ServiceHours;


use Illuminate\Http\Request;
use App\Models\ServiceHours\ServiceHour;
use Inertia\Inertia;


use App\Http\Controllers\Controller;

class ServiceHourController extends Controller
{
    public function get(Request $request)
    {
        $data = ServiceHour::all();
        foreach ($data as $d) {
            $d->json = json_decode($d->json);
        }
        return response($data, 200);
    }
    public function search(Request $request)
    {
        $data = ServiceHour::search($request->title)->orderBy("title", "asc")->get();
        if (count($data) == 0) return response(null, 200);
        foreach ($data as $d) {
            $d->json = json_decode($d->json);
        }
        return response($data, 200);
    }
}
