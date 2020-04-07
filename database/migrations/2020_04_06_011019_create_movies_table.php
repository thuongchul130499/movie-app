<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('original_language');
            $table->string('original_title');
            $table->boolean('adult')->default(false);
            $table->text('overview');
            $table->string('poster_path')->nullable();
            $table->float('popularity');
            $table->string('backdrop_path')->nullable();
            $table->integer('budget')->unsigned();
            $table->date('release_date');
            $table->bigInteger('revenue')->unsigned();
            $table->integer('runtime')->nullable();
            $table->string('status');
            $table->string('tagline')->nullable();
            $table->string('title');
            $table->string('spoken_languages');
            $table->boolean('video')->default(false);
            $table->float('vote_average')->default(0);
            $table->integer('vote_count')->unsigned()->default(0);
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
        Schema::dropIfExists('movies');
    }
}
