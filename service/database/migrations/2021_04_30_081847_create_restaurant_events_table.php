<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("restaurant_events", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("location");
            $table->date("start")->nullalble();
            $table->date("end")->nullable();
            $table->string("title")->nullable();
            $table->string("body")->nullable();
            $table->decimal("price", 10, 2,)->nullable();
            $table->decimal("priceAdditional", 10, 2,)->nullable();
            $table->json("json")->nullable();
            $table->json("servingTime")->nullable();
            $table->enum("icon",  [
                "null",
                "mdiHamburger",
                "mdiFoodCroissant",
                "mdiFoodForkDrink",
                "mdiIceCream",
                "mdiCoffeeOutline",
                "mdiCandycane",
                "mdiGlassFlute",
                "mdiSilverwareForkKnife",
                "mdiGlassMugVariant",
                "mdiCupcake",
                "mdiBeerOutline",
            ])->nullable();
            $table->json("images")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("restaurant_events");
    }
}
