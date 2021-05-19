<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\DataController;


// DATA
Route::get("/", [DataController::class, "get"])->name("restaurant.data");

// LUNCH DATA
Route::post("/authorized/lunch", [DataController::class, "post"]);
