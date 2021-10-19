<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Cafe\CafeController;

// POST
Route::post("/type/post", [CafeController::class, "postType"]);
Route::post("/post", [CafeController::class, "postItem"]);

// DELETE
Route::delete("/type/delete", [CafeController::class, "deleteType"]);
Route::delete("/delete", [CafeController::class, "deleteItem"]);

//GET
Route::get("/", [CafeController::class, "get"])->name("cafe");
