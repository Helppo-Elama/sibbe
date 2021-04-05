<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantLunchTable extends Migration
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
            $table->string("hours")->nullable();
            $table->decimal("price", 10, 2,)->nullable();
            $table->enum("type", ["lunch", "brunch"])->nullable();
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
        Schema::dropIfExists("restaurant_lunches");
    }
}
