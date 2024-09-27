<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffMudasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff_mudas', function (Blueprint $table) {
            $table->id();
            $table->string("name")->nullable();
            $table->string("nim")->unique('idx_saff_nim')->nullable();
            $table->integer("angkatan")->nullable();
            $table->string("no_hp")->nullable();
            $table->string("id_line")->nullable();
            $table->string("berkas_link");
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
        Schema::dropIfExists('staff_mudas');
    }
}
