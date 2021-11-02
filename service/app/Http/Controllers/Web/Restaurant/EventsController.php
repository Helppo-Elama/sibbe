<?php

namespace App\Http\Controllers\Web\Restaurant;


use Illuminate\Http\Request;
use App\Models\Events\Event;
use Inertia\Inertia;


use App\Http\Controllers\Controller;



class EventsController extends Controller
{
    public function postType(Request $request)
    {
        if ($request->id) {
            Event::where(["id" => $request->id])
                ->update(["icon" => $request->icon, "type" => $request->type]);
            return response()->json(["message" => "Kategoria päivitetty"], 200);
        } else {
            $event = new Event;
            $event->icon = $request->icon;
            $event->type = $request->type;
            $event->save();
            return response()->json(["message" => "Kategoria lisätty", "id" => $event->id], 200);
        }
    }

    public function postItem(Request $request)
    {
        Event::where(["type" => $request->type])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Lista päivitetty"], 200);
    }

    public function deleteItem(Request $request)
    {
        Event::where(["type" => $request->type])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Annos poistettu"], 200);
    }

    public function deleteType(Request $request)
    {
        if ($request->id) {
            Event::where(["id" => $request->id])
                ->delete();
            return response()->json(["message" => "Kategoria poistettu"], 200);
        } else return response()->json(["message" => "Listalta ei löytynyt poistettavaa kategoriaa"], 200);
    }

    public function get(Request $request)
    {
        $data = Event::all();
        foreach ($data as $d) {
            $d->json = json_decode($d->json);
        }
        return Inertia::render("Restaurant/Events", [
            "data" => $data
        ]);
    }
}
