<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\Product\GetProductInterface;
use App\Services\Shopify\Product\GetProduct;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->singleton(GetProductInterface::class, GetProduct::class);
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
