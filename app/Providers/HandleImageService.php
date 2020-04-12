<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HandleImageService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'handleImageService',
            'App\Services\HandleImageService'
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
