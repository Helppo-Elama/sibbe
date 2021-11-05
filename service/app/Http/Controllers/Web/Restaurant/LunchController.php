<?php

namespace App\Http\Controllers\Web\Restaurant;

use Illuminate\Http\Request;
use App\Models\Restaurant\Lunch;
use App\Models\Restaurant\Data;
use App\Http\Controllers\Controller;
use App\Models\ServiceHours\ServiceHour;

class LunchController extends Controller
{
    public function postDate(Request $request)
    {
        $data = ["date" => $request->date, "price" => $request->price, "price_additional" => $request->price_additional, "type" => $request->type, "serving_time" => $request->serving_time];
        $message = Lunch::postDate($data);
        return response()->json(["message" => $message], 200);
    }

    public function postLunch(Request $request)
    {
        $data = ["date" => $request->date, "json" => $request->json];
        $message = Lunch::postLunch($data);
        return response()->json(["message" => $message], 200);
    }

    public function deleteLunch(Request $request)
    {
        $data = ["date" => $request->date, "json" => $request->json];
        $message = Lunch::deleteLunch($data);
        return response()->json(["message" => $message], 200);
    }

    public function getLunches(Request $request)
    {
        $data = ["start" => $request->start_date, "end" => $request->end_date];
        $lunches = Lunch::getLunches($data);
        return response()->json($lunches, 200);
    }

    public function getPresistentLunch() //: Mixed
    {
        $data = ["json" => Data::getPresistentLunch(), "service_hours" => ServiceHour::getPresistentLunch()];
        return response()->json($data, 200);
    }
    public function postPresistentLunchData(Request $request)
    {
        $json = json_encode(["enabled" => $request->enabled, "portions" => $request->portions]);
        $message = Data::postPresistentLunchData($json);
        return response()->json(["message" => $message], 200);
    }
    public function postPresistentLunchServiceHours(Request $request)
    {
        $data = ["json" => json_encode($request->service_hours), "start" => $request->start, "end" => $request->end];
        $message = ServiceHour::postPresistentLunchServiceHours($data);
        return response()->json(["message" => $message], 200);
    }

    public function deletePresistentLunchDataPortions(Request $request)
    {
        $message = Data::deletePresistentLunchDataPortions($request->getContent());
        return response()->json(["message" => $message], 200);
    }
}
