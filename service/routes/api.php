<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Restaurant\LunchController;
use App\Http\Controllers\Api\Restaurant\MenuController;
use App\Http\Controllers\Api\Restaurant\EventsController;
use App\Http\Controllers\Api\Restaurant\RestaurantController;
use App\Http\Controllers\Api\Cafe\CafeController;
use App\Http\Controllers\Api\ServiceHours\ServiceHourController;
use App\Http\Controllers\Api\Mail\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
});

Route::get("/restaurant", [RestaurantController::class, "get"]);

Route::get("/cafe", [CafeController::class, "get"]);

Route::post("/mail/contact/post", [ContactController::class, "submit"]);
