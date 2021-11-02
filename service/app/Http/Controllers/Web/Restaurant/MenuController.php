<?php

namespace App\Http\Controllers\Web\Restaurant;


use Illuminate\Http\Request;
use App\Models\Restaurant\Menu;
use Inertia\Inertia;


use App\Http\Controllers\Controller;



class MenuController extends Controller
{
    public function postType(Request $request)
    {
        if ($request->id) {
            Menu::where(["id" => $request->id])
                ->update(["icon" => $request->icon, "type" => $request->type]);
            return response()->json(["message" => "Kategoria päivitetty"], 200);
        } else {
            $menu = new Menu;
            $menu->icon = $request->icon;
            $menu->type = $request->type;
            $menu->save();
            return response()->json(["message" => "Kategoria lisätty", "id" => $menu->id], 200);
        }
    }

    public function postItem(Request $request)
    {
        Menu::where(["id" => $request->id])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Lista päivitetty"], 200);
    }

    public function deleteItem(Request $request)
    {
        Menu::where(["id" => $request->id])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Annos poistettu"], 200);
    }

    public function deleteType(Request $request)
    {
        if ($request->id) {
            Menu::where(["id" => $request->id])
                ->delete();
            return response()->json(["message" => "Kategoria poistettu"], 200);
        } else return response()->json(["message" => "Listalta ei löytynyt poistettavaa kategoriaa"], 200);
    }

    public function get()
    {
        $data = Menu::all();
        foreach ($data as $d) {
            $d->json = json_decode($d->json);
        }
        return Inertia::render("Restaurant/Menu", [
            "data" => $data
        ]);
    }
}
