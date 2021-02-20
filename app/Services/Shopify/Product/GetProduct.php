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
    }
}
