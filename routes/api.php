<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductsController::class, 'products']);

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('funds', [UserController::class, 'updateFunds']);
Route::post('logout', [LoginController::class, 'logout']);
Route::post('/purchase', [UserController::class, 'purchase']);
Route::post('/purchaseByFunds', [UserController::class, 'purchaseByFunds']);
Route::get('/funds', [UserController::class, 'getFunds']);
Route::post('/orders', [UserController::class, 'orders']);

