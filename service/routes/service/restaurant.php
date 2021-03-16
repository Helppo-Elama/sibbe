<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// POST
//Route::post("/lunch",[App\Http\Controllers\Restaurant\LunchController::class, "post"]);
Route::post("/lunch",[LunchController::class, "post"]);

// GET
Route::get("/", function () {
        return Inertia::render("Restaurant");
})
    ->name("restaurant");

Route::get("/lunch", function () {
        return Inertia::render("Restaurant/Lunch");
})
    ->name("restaurant.lunch");

Route::get("/menu", function () {
        return Inertia::render("Restaurant/Menu");
})
    ->name("restaurant.menu");

Route::get("/other", function () {
        return Inertia::render("Restaurant/Other");
})
    ->name("restaurant.other");
