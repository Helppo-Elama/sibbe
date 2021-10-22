<?php

namespace App\Http\Controllers\Web\Restaurant;

use LimitIterator;

use Illuminate\Http\Request;
use App\Models\Restaurant\Lunch;
use App\Models\Defaults\RestaurantDefault;
use Helpers\Date\DateRangeIterator;

use App\Http\Controllers\Controller;



class LunchController extends Controller
{
    public function postDate(Request $request)
    {
        Lunch::where(["date" => $request->date])
            ->update(["price" => $request->price, "price_additional" => $request->price_additional, "type" => $request->type, "serving_time" => $request->serving_time]);

        return response()->json(["message" => "Päivä päivitetty"], 200);
    }

    public function postLunch(Request $request)
    {
        Lunch::where(["date" => $request->date])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Lounas päivitetty"], 200);
    }
    public function deleteLunch(Request $request)
    {
        Lunch::where(["date" => $request->date])
            ->update(["json" => $request->json]);

        return response()->json(["message" => "Annos poistettu"], 200);
    }

    public function get(Request $request)
    {

        $start = $request->start_date;
        $end = $request->end_date;
        $max = 50;

        $lunches = Lunch::whereBetween("date", [$start, $end])->orderBy("date", "asc")->limit($max)->get();

        $dates = [];
        foreach (new LimitIterator(new DateRangeIterator($start, $end), 0, $max) as $date) {
            array_push($dates, $date);
        }
        $dates_missing = [];

        $defaults = RestaurantDefault::where(["title" => "lunch"])->first()->toArray();

        // extract $serving_time, $price, $price_additional and $type from $defaults
        extract((array)json_decode($defaults["json"]));
        foreach ($dates as $date) {
            if ($lunches->contains("date", $date) === false) {
                $lunches->push((object)[
                    "date" => $date,
                    "json" =>  "",
                    "serving_time" => json_encode($serving_time),
                    "price" => $price,
                    "price_additional" => $price_additional,
                    "type" => $type
                ]);
                array_push($dates_missing, $date);
            }
        }
        foreach ($lunches as $lunch) {
            if (array_search($lunch->date, $dates_missing) !== false) {
                Lunch::create([
                    "date" => $lunch->date,
                    "serving_time" => json_encode($serving_time),
                    "price" => $price,
                    "price_additional" => $price_additional,
                    "type" => $type
                ]);
            }
            $lunch->json = json_decode($lunch->json);
            $lunch->serving_time = json_decode($lunch->serving_time);
        }
        return response()->json($lunches, 200);
    }
}
