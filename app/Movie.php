<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $fillable = [
        'original_language',
        'original_title',
        'adult',
        'overview',
        'poster_path',
        'popularity',
        'backdrop_path',
        'budget',
        'release_date',
        'revenue',
        'runtime',
        'status',
        'tagline',
        'title',
        'spoken_languages',
        'video',
        'vote_average',
        'vote_count'
    ];

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function genreses(){
        return $this->belongsToMany(Genres::class);
    }

    public function actors()
    {
        return $this->belongsToMany(Actor::class);
    }
}
