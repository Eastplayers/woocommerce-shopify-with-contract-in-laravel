<?php

namespace App\Services\Woocommerce\Product;

use App\Contracts\Product\GetProductInterface;

/**
 *
 */
class GetProduct implements GetProductInterface
{
    public function getData(int $page, int $pageSize = 10)
    {
        echo "You get Woocommerce Product\n";
    }
}
