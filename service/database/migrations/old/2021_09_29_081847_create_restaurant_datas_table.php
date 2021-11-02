<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("restaurant_data_items", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->unique();
            $table->string("description")->nullable();
            $table->json("json")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("restaurant_data_items");
    }
}
