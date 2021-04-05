<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCafeMenuItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("cafe_menu_items", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("type")->nullable();
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
        Schema::dropIfExists("cafe_menu_items");
    }
}
