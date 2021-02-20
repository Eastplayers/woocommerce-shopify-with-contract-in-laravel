<?php

use Illuminate\Database\Seeder;
use App\View;

class ViewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 5000000; $i++) {
            echo $i."\n";
            $index = rand(0, 47);
            $view = new View;
            $view->ip = "192.168.10.".$index;
            $view->save();
        }
    }
}
