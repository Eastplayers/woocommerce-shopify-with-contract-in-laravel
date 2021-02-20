<?php

namespace App\Services\Woocommerce\Product;

use App\Contracts\Product\GetProductInterface;
use Automattic\WooCommerce\Client;
use Automattic\WooCommerce\HttpClient\HttpClientException;

/**
*
*/
class GetProduct implements GetProductInterface
{
    public function getData(int $page, int $pageSize = 10)
    {
        echo "You get Woocommerce Product\n";
        $woocommerce = new Client(
            env('WOOCOMMERCE_STORE_URL', ''),
            env('WOOCOMMERCE_CONSUMER_KEY', ''),
            env('WOOCOMMERCE_CONSUMER_SECRET', ''),
            [
                'wp_api' => true,
                'version' => 'wc/v3',
                'query_string_auth' => true
            ]
        );
        $products = $woocommerce->get('products', array(
            'per_page' => $pageSize,
            'page' => $page
        ));
        dd($products);
    }
}
