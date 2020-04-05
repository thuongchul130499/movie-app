<?php

use Illuminate\Support\Facades\Route;
// Route::get('/login', function(){
//     return view('layouts.login');
// })->middleware('guest');
// Route::post('login', 'Auth\LoginController@login')->name('login');
// Route::get('/', 'MoviesController@index')->name('movies.index');
// Route::get('/movies/{movie}', 'MoviesController@show')->name('movies.show');
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');