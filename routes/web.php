<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\LoginController;

Route::get('/user', [LoginController::class, 'loggedInUser'])->middleware('auth:sanctum');

Route::resource('admin', ProductsController::class);
Route::get('/admin', [ProductsController::class, 'index']);
Route::any('/{any}', function() {
    return view('welcome');
})->where('any', '.*');
