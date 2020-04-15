<?php

use Illuminate\Support\Facades\Route;
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');
