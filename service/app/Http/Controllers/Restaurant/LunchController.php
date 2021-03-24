<?php

namespace App\Http\Controllers\Restaurant;

use LimitIterator;

use Illuminate\Http\Request;
use App\Models\Restaurant\Lunch;
use Helpers\Date\DateRangeIterator;

use App\Http\Controllers\Controller;



class LunchController extends Controller
{
    public function post(Request $request)
    {
        Lunch::where(["date" => $request->input("date")])
            ->update(["json" => $request->json]);

        return response()->json("Yes!", 200);
    } //end post()

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
        if ($request->user()) {
            $dates_missing = [];

            foreach ($dates as $date) {
                if ($lunches->contains("date", $date) === false) {
                    $lunches->push((object)["date" => $date, "json" =>  ""]);
                    array_push($dates_missing, $date);
                }
            }
        }
        foreach ($lunches as $lunch) {
            if ($request->user()) {
                if (array_search($lunch->date, $dates_missing) !== false) {
                    Lunch::create(["date" => $lunch->date]);
                }
            }
            $lunch->json = json_decode($lunch->json);
        }
        //        return response($request->user(), 200);
        return response($lunches, 200);
    } //end get()
}//end class
