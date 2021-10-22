<?php

namespace App\Http\Controllers\Web\Cafe;


use Illuminate\Http\Request;
use App\Models\Cafe\Cafe;
use Inertia\Inertia;


use App\Http\Controllers\Controller;



class CafeController extends Controller
{
    public function postType(Request $request)
    {
        if ($request->id) {
            Cafe::where(["id" => $request->id])
                ->update(["icon" => $request->icon, "type" => $request->type]);
            return response()->json(["message" => "Kategoria päivitetty"], 200);
        } else {
            $cafe = new Cafe;
            $cafe->icon = $request->icon;
            $cafe->type = $request->type;
            $cafe->save();
            return response()->json(["message" => "Kategoria lisätty", "id" => $cafe->id], 200);
        }
    }

    public function postItem(Request $request)
    {
        Cafe::where(["type" => $request->type])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Annos päivitetty"], 200);
    }

    public function deleteItem(Request $request)
    {
        Cafe::where(["type" => $request->type])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Annos poistettu"], 200);
    }

    public function deleteType(Request $request)
    {
        if ($request->id) {
            Cafe::where(["id" => $request->id])
                ->delete();
            return response()->json(["message" => "Kategoria poistettu"], 200);
        } else return response()->json(["message" => "Listalta ei löytynyt poistettavaa kategoriaa"], 200);
    }

    public function get()
    {
        $data = Cafe::all();
        foreach ($data as $d) {
            $d->json = json_decode($d->json);
        }
        return Inertia::render('Cafe/Cafe', [
            "data" => $data
        ]);
    }
}
