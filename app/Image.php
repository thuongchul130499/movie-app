<?php

namespace App;
use App\Casts\Json;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'backdrops', 'posters', 'movie_id'
    ];

    protected $casts = [
        'backdrops' => Json::class,
        'posters' => Json::class,
    ];

    public function movie(){
        return $this->belongsTo(Movie::class);
    }
}
