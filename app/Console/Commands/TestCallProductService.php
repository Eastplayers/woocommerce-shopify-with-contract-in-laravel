<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Contracts\Product\GetProductInterface;
use App\Services\Shopify\Product\GetProduct as GetShopifyProduct;
use App\Services\Woocommerce\Product\GetProduct as GetWoocommerceProduct;

class TestCallProductService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:TestCallProductService';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test Call Product Service';
    protected $_getProduct;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(GetProductInterface $getProduct)
    {
        parent::__construct();
        app()->bind(GetProductInterface::class, GetShopifyProduct::class);
        $this->_getProduct = app()->make(GetProductInterface::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->_getProduct->getData(1);

    }
}
