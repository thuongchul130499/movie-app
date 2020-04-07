<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieGenresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genres_movie', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('movie_id')
                    ->unsigned()
                    ->foreign('movie_id')
                    ->references('id')->on('movies')
                    ->onDelete('cascade');
            $table->bigInteger('genres_id')
                    ->unsigned()
                    ->foreign('genres_id')
                    ->references('id')->on('genres')
                    ->onDelete('cascade');
            $table->unique(['movie_id', 'genres_id']);
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
        Schema::dropIfExists('genres_movie');
    }
}
