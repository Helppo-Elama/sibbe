<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantLunchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("restaurant_lunches", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date("date")->unique();
            $table->decimal("price", 10, 2,)->nullable();
            $table->enum("type", ["lunch", "brunch"])->nullable();
            $table->json("json")->nullable();
            $table->json("serving_time")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("restaurant_lunches");
    }
}
