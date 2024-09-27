<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffMuda extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "nim",
        "angkatan",
        "id_line",
        "berkas_link",
        "unique_code",
        "status"
    ];
}
