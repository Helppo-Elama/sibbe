<?php

namespace App\Http\Controllers\Web\Defaults;


use Illuminate\Http\Request;
use App\Models\Defaults\RestaurantDefault;
use Inertia\Inertia;


use App\Http\Controllers\Controller;



class DefaultsRestaurantController extends Controller
{
    public function post(Request $request)
    {
        RestaurantDefault::where(["title" => $request->title])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Oletusasetukset päivitetty"], 200);
    }

    public function get(Request $request)
    {
        $restaurant_default_items = RestaurantDefault::all();
        foreach ($restaurant_default_items as $item) {
            $item->json = json_decode($item->json);
        }
        if ($request->user()) {
            return Inertia::render("Restaurant/Defaults", [
                "data" => $restaurant_default_items
            ]);
        } else {
            return response($restaurant_default_items, 200);
        };
    }

    public function getLunchesDefaults()
    {
        $restaurant_default_items = RestaurantDefault::where(["title" => "lunch"])->get();
        foreach ($restaurant_default_items as $item) {
            $item->json = json_decode($item->json);
        }
        return response($restaurant_default_items, 200);
    }
}
