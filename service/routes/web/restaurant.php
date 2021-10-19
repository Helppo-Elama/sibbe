<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Restaurant\LunchController;
use App\Http\Controllers\Web\Restaurant\MenuController;
use App\Http\Controllers\Web\Restaurant\EventsController;
use App\Http\Controllers\Web\Defaults\DefaultsRestaurantController as DefaultsController;
use Inertia\Inertia;

// LUNCH
Route::get("/lunch", function () {
    return Inertia::render("Restaurant/Lunch");
})->name("restaurant.lunch");
Route::get("/lunch/lunches", [LunchController::class, "get"]);
Route::get("/defaults/lunch", [DefaultsController::class, "getLunchDefaults"]);

Route::post("/lunch/post", [LunchController::class, "postLunch"]);
Route::post("/lunch/date/post", [LunchController::class, "postDate"]);

Route::delete("/lunch/delete", [LunchController::class, "deleteLunch"]);


// MENU
Route::get("/menu", [MenuController::class, "get"])->name("restaurant.menu");

Route::post("/menu/type/post", [MenuController::class, "postType"]);
Route::post("/menu/post", [MenuController::class, "postItem"]);

Route::delete("/menu/delete", [MenuController::class, "deleteItem"]);
Route::delete("/menu/type/delete", [MenuController::class, "deleteType"]);

// EVENTS
Route::get("/events", [EventsController::class, "get"])->name("restaurant.events");

Route::post("/events/type", [EventsController::class, "postType"]);
Route::post("/events/item", [EventsController::class, "postItem"]);
Route::post("/events/delete", [EventsController::class, "deleteItem"]);

Route::delete("/events/type", [EventsController::class, "deleteType"]);
