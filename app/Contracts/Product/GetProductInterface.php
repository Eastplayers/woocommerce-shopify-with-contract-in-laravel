<?php

namespace App\Contracts\Product;

/**
 *
 */
interface GetProductInterface
{
    public function getData(int $page, int $pageSize = 10);
}
