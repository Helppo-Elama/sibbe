<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\LunchController;
use App\Http\Controllers\Restaurant\MenuController;
use Inertia\Inertia;

// LUNCH
Route::post("/lunch/authorized/lunch", [LunchController::class, "post_lunch"]);
Route::post("/lunch/authorized/date", [LunchController::class, "post_date"]);
Route::get("/lunch/authorized", [LunchController::class, "get"]);
Route::get("/lunch", function () {
    return Inertia::render("Restaurant/Lunch");
})
    ->name("restaurant.lunch");

// MENU

Route::post("/menu/authorized/type", [MenuController::class, "post_type"]);
Route::post("/menu/authorized/item", [MenuController::class, "post_item"]);

Route::delete("/menu/authorized/type", [MenuController::class, "delete_type"]);

Route::get("/menu", [MenuController::class, "get"])->name("restaurant.menu");

/*
Route::get("/menu", function () {
    return Inertia::render("Restaurant/Menu");
})
    ->name("restaurant.menu");
*/
// OTHER
Route::get("/other", function () {
    return Inertia::render("Restaurant/Other");
})
    ->name("restaurant.other");
