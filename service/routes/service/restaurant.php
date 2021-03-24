<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\LunchController;
use Inertia\Inertia;

// POST
Route::post("/lunch/authorized", [LunchController::class, "post"]);

// GET

Route::get("/lunch/authorized", [LunchController::class, "get"]);

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
