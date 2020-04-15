<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'categories',
    ];

    protected $casts = [
        'categories' => 'array',
    ];

}
