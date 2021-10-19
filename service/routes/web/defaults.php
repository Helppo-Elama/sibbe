<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Defaults\DefaultsRestaurantController as RestaurantController;


// DATA
Route::get("/", [RestaurantController::class, "get"])->name("restaurant.data");
Route::get("/restaurant/lunch", [RestaurantController::class, "getLunchesDefaults"]);

// POST DATA
Route::post("/restaurant", [RestaurantController::class, "post"]);
Route::post("/days", [RestaurantController::class, "post"]);
