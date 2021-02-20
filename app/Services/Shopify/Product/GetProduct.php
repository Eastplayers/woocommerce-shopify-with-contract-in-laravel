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
