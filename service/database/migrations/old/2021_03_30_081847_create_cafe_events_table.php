<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCafeEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("cafe_events", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date("date")->unique();
            $table->string("title")->nullable();
            $table->string("body")->nullable();
            $table->decimal("price", 10, 2,)->nullable();
            $table->decimal("price_additional", 10, 2,)->nullable();
            $table->json("json")->nullable();
            $table->json("serving_time")->nullable();
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("cafe_events");
    }
}
