<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("portions", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->nullable();
            $table->longtext("body")->nullable();
            $table->text("ingredients")->nullable();
            $table->text("allergenic")->nullable();
            $table->decimal("price", 10, 2,)->nullable();
            $table->decimal("price_additional", 10, 2,)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("portions");
    }
}
