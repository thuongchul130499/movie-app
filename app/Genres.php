<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genres extends Model
{
    protected $fillable = [
        'id', 'name'
    ];

    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
