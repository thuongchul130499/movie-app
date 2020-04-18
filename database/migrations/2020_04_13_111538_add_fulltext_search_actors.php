<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddFulltextSearchActors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('actors', function (Blueprint $table) {
            DB::statement('ALTER TABLE actors ADD FULLTEXT `search` (`name`, `also_known_as`)');
            DB::statement('ALTER TABLE actors ENGINE = MyISAM');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('actors', function (Blueprint $table) {
            DB::statement('ALTER TABLE actors DROP FULLTEXT `search` (`name`, `also_known_as`)');
        });
    }
}
