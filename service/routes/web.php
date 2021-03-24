<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Mail\ContactController;


Route::middleware(["auth:sanctum", "verified"])
    ->get("/dashboard", function () {
        return Inertia::render("Dashboard");
    })
    ->name("dashboard");

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("restaurant")
    ->group(base_path("routes/service/restaurant.php"));

Route::get("/", function () {
    return Inertia::render("Auth/Login", ["canResetPassword" => true]);
});


/*
    Route::get("/", function () {
        return Inertia::render("Auth/Register");
    });
*/

Route::namespace("Mail")->post("/mail/contact", [ContactController::class, "submit"]);
