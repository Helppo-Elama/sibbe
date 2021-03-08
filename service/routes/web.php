<?php

use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
*/

Route::get("/", function () {
    return Inertia::render("Auth/Login", ["canResetPassword" => true]);
});

Route::post("/submit", [SubmitController::class, "submit"]);

Route::middleware(["auth:sanctum", "verified"])
    ->get("/dashboard", function () {
        return Inertia::render("Dashboard");
    })
    ->name("dashboard");
