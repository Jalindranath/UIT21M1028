<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/categories/{categoryName}/product', [ProductController::class, 'getTopproduct']);
Route::get('/categories/{categoryName}/product/{productId}', [ProductController::class, 'getProductDetails']);
