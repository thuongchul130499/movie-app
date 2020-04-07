<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_user', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('movie_id')
                    ->unsigned()
                    ->foreign('movie_id')
                    ->references('id')->on('movies')
                    ->onDelete('cascade');
            $table->bigInteger('actor_id')
                    ->unsigned()
                    ->foreign('actor_id')
                    ->references('id')->on('movies')
                    ->onDelete('cascade');
            $table->unique(['movie_id', 'actor_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_user');
    }
}
