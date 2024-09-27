<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ComingSoonController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StaffMudaController;
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


Route::middleware("guest")->group(function () {
    Route::get('/', [HomeController::class, "index"])->name('home');
    // Route::get('/home', [HomeController::class, "index"])->name('hometest');
    // Route::get('/about', [ComingSoonController::class, "index"])->name('about');
    // Route::get('/coming-soon', [ComingSoonController::class, "index"]);
    Route::as("staff-muda.")->prefix("staff-muda")->group(function () {
        // Route::get('/', [StaffMudaController::class, "index"])->name('index');
        // Route::post('/', [StaffMudaController::class, "store"])->name("store");
        Route::post('/announcement', [StaffMudaController::class, "show"])->name("announcement.show");
        Route::get('/announcement', [StaffMudaController::class, "announcements"])->name("announcement");
        // Route::get('/announcementbetatester', [StaffMudaController::class, "announcements"]);
    });
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
