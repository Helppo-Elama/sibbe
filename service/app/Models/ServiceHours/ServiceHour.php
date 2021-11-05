<?php

namespace App\Models\ServiceHours;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ServiceHour extends Model
{
    use HasFactory;

    protected $table = "service_hours";
    protected $fillable = ["title", "json", "closed_until", "start", "end"];
    protected $attributes = [
        "title" => null,
        "json" => null,
        "closed_until" => null,
        "start" => null,
        "end" => null,
    ];

    public static function getRestaurantAndCafe() //: Mixed
    {
        $service_hour_items = ServiceHour::whereIn("title", ["restaurant", "cafe"])->get();
        $service_hour_items->makeHidden(["start", "end", "created_at", "updated_at", "id"]);
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return $service_hour_items;
    }

    public static function getPresistentLunch() //: Mixed
    {
        $service_hour_item = ServiceHour::where(["title" => "presistent_lunch"])->get()->first();
        $service_hour_item->makeHidden(["title", "closed_until", "created_at", "updated_at", "id"]);
        $service_hour_item->json = json_decode($service_hour_item->json);
        return $service_hour_item;
    }

    public static function getClosedUntil(Request $request) //: Mixed
    {
        $service_hour_items = ServiceHour::where(["title" => $request->title])->get();
        foreach ($service_hour_items as $item) {
            $item->json = json_decode($item->json);
        }
        return $service_hour_items[0]->closed_until;
    }

    public static function post(Request $request) //: Mixed
    {
        if ($request->title === "presistent_lunch") {
            ServiceHour::where(["title" => $request->title])
                ->update(["json" => $request->json, "start" => $request->start, "end" => $request->end]);
            return "Aukioloajat lounaille on päivitetty";
        }
        ServiceHour::where(["title" => $request->title])
            ->update(["closed_until" => $request->closed_until, "json" => $request->json]);
        $title = __($request->title);
        return ["message" => "Aukioloajat " . $title . "lle on päivitetty"];
    }

    public static function postPresistentLunchServiceHours(array $request_data): String
    {
        $service_hours = new ServiceHour;
        $service_hours->where(["title" => "presistent_lunch"])->update(["json" => $request_data["json"], "start" => $request_data["start"], "end" => $request_data["end"]]);
        return "Lounastietojen ajat päivitetty!";
    }
}
