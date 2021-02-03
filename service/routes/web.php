<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubmitController;

    Route::get(
        '/',
        function () {
            return view('welcome');
        }
    );

    Route::post("/submit", [SubmitController::class, 'submit']);
