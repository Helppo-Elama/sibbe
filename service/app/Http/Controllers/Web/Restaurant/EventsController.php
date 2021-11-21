<?php

namespace App\Http\Controllers\Web\Restaurant;


use Illuminate\Http\Request;
use App\Models\Restaurant\Event;
use Inertia\Inertia;


use App\Http\Controllers\Controller;



class EventsController extends Controller
{
    public function get()
    {
        $data = Event::get();
        return Inertia::render("Restaurant/Events", [
            "data" => $data
        ]);
    }
}
