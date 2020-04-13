<?php

namespace App;

use App\Traits\FullTextSearch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{

    use SoftDeletes, FullTextSearch;
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

    protected $dates = ['deleted_at'];

    protected $searchable = [
        'original_title',
        'title'
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
