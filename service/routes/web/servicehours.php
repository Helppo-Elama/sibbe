<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\ServiceHours\ServiceHourController;
use Inertia\Inertia;

// SERVICE HOURS

Route::get("/", [serviceHourController::class, "getRestaurantAndCafe"])->name("servicehours");
Route::get("/presistentlunch", [serviceHourController::class, "getPresistentLunch"]);
Route::post("/post", [ServiceHourController::class, "post"]);
