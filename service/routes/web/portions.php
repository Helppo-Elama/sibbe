<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Portions\PortionController;
use Inertia\Inertia;

// PORTIONS
Route::post("/portion/post", [PortionController::class, "post"]);

Route::delete("/portion/delete", [PortionController::class, "delete"]);

Route::get("/search", [PortionController::class, "search"]);
Route::get("/check", [PortionController::class, "check"]);
Route::get("/portions", [PortionController::class, "get"]);

Route::get("/", function () {
    return Inertia::render("Portions/Portions");
})
    ->name("portions");
