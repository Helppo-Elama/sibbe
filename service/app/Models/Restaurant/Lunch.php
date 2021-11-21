<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Defaults\RestaurantDefault;
use LimitIterator;
use Helpers\Date\DateRangeIterator;

class Lunch extends Model
{
    use HasFactory;

    protected $table = "restaurant_lunches";
    protected $fillable = ["date", "price", "price_additional", "type", "json", "serving_time"];
    protected $attributes = [
        "json" => null,
        "type" => null,
        "price" => null,
        "price_additional" => null,
        "serving_time" => null,
    ];

    public static function postDate(array $data) //: String
    {
        Lunch::where(["date" => $data["date"]])
            ->update(["price" => $data["price"], "price_additional" => $data["price_additional"], "type" => $data["type"], "serving_time" => $data["serving_time"]]);
        return "Päivä päivitetty";
    }

    public static function postLunch(array $data) //: String
    {
        Lunch::where(["date" => $data["date"]])
            ->update(["json" => $data["json"]]);
        return "Lounas päivitetty";
    }

    public static function deleteLunch(array $data) //: String
    {
        Lunch::where(["date" => $data["date"]])
            ->update(["json" => $data["json"]]);
        return "Annos poistettu";
    }

    public static function getLunches(array $data) //: Collection
    {
        $start = $data["start"];
        $end = $data["end"];
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
        return $lunches;
    }
}
