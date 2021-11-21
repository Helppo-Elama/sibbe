<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("service_hours", function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->nullable();
            $table->date("closed_until")->nullable();
            $table->json("json")->nullable();
            $table->date("start")->nullable();
            $table->date("end")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("service_hours");
    }
}
