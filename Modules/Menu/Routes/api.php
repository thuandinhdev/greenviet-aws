<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    [
    'middleware' => 'auth:api'
    ],
    function () {
        Route::get('sidebar-menu', 'MenuController@getSidebarMenu');
        Route::resource('menu', 'MenuController');
        Route::get('get-hrm-status', 'MenuController@getHRMstatus');
    }
);
