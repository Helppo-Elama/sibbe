<?php

use Illuminate\Support\Facades\Route;
use UniSharp\LaravelFilemanager\Lfm;
use Inertia\Inertia;

Route::middleware(["auth:sanctum", "verified"])
    ->get("/dashboard", function () {
        return Inertia::render("Dashboard");
    })
    ->name("dashboard");

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("restaurant")
    ->group(base_path("routes/web/restaurant.php"));

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("cafe")
    ->group(base_path("routes/web/cafe.php"));

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("portions")
    ->group(base_path("routes/web/portions.php"));

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("servicehours")
    ->group(base_path("routes/web/servicehours.php"));

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("defaults")
    ->group(base_path("routes/web/defaults.php"));

Route::middleware(["auth:sanctum", "verified"])
    ->get("/editor", function () {
        return Inertia::render("Editor");
    })
    ->name("dashboard");

Route::middleware(["auth:sanctum", "verified"])
    ->prefix("filemanager")
    ->group(function () {
        Lfm::routes();
    });

Route::get("/", function () {
    return Inertia::render("Auth/Login", ["canResetPassword" => true]);
});


/*
Route::get("/", function () {
    return Inertia::render("Auth/Register");
});
*/
