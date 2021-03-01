<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## About

Implement get product from [WooCommerce](https://woocommerce.github.io/woocommerce-rest-api-docs/) and [Shopify](https://shopify.dev/docs/admin-api/rest/reference) with [Contract](https://laravel.com/docs/7.x/contracts) Laravel.


## What is Contract?
Contract is one of common software design patterns.
As you have a clear understanding about [Service Provider](https://laravel.com/docs/8.x/providers) and [Service Container](https://laravel.com/docs/8.x/container), according to Laravel's document:
>Laravel's "contracts" are a set of interfaces that define the core services provided by the framework.

When you define a contact, you **explicitly** setup a binding between services and its implementations unlike [Facades](https://laravel.com/docs/8.x/facades) which do not require injection in the class `_contructor()`.

## When to use Contract
Contract paves the way for builiding robust, well-tested applications in Laravel. The use cases are various. For example, there are multiple services or providers for chat implementations such as Facebook Messenger, WhatApps, Instagram. Currently, Facebook Messenger is used for chat but after several months, we switch to Instagram chat. To minimize modification deeply in code, we expose set of common chat functions, for instance send text message, send image message, send voice recording ... then map them to the correct service. As a result, switching between services is similar to changing your binding.

## How to apply
In this project, we setup a contract between WooCommerce and Shopify which are popuplar providers/packages for product management.

1. Create binding between interface and its service in `app/Providers/ProductServiceProvider.php` (We mapped Shopify as a service)

```php
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
```
2. Expose/list a set of methods that product management should have in `app/Contracts/Product/GetProductInterface.php`

```php
<?php

namespace App\Contracts\Product;

/**
 *
 */
interface GetProductInterface
{
    public function getData(int $page, int $pageSize = 10);
}

```
3. Write actual implementation for each method in `app/Services/Shopify/Product/GetProduct.php` (you can create different service folders depending on your desired services)

```php
<?php

namespace App\Services\Shopify\Product;

use App\Contracts\Product\GetProductInterface;

/**
*
*/
class GetProduct implements GetProductInterface
{
    public function getData(int $page, int $pageSize = 10)
    {
        echo "You get Shopify Product\n";
        $config = array(
            'ShopUrl' => env('SHOPIFY_STORE_NAME').'.myshopify.com',
            'ApiKey' => env('SHOPIFY_STORE_API'),
            'Password' => env('SHOPIFY_STORE_PASSWORD'),
        );
        \PHPShopify\ShopifySDK::config($config);
        $shopify = new \PHPShopify\ShopifySDK();
        $filters = [
            'limit' => $pageSize
        ];
        $productResources = $shopify->Product();
        $products = $productResources->get($filters);
    }
}
```
