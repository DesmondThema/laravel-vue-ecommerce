<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::resource('admin', ProductsController::class);

Route::any('/{any}', function() {
    return view('welcome');
})->where('any', '.*');
