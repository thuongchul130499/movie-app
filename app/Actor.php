<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    CONST MALE = 1;
    CONST FEMALE = 2;

    protected $fillable = [
        'name',
        'birthday',
        'known_for_department',
        'also_known_as',
        'gender',
        'deathdate',
        'biography',
        'popularity',
        'place_of_birth',
        'profile_path',
    ];

    protected $casts = [
        'also_known_as' => JSON::class,
    ];

    public function movies()
    {
        return $this->belongsToMany(Movie::class);
    }
}
