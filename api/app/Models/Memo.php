<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memo extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'title',
        'description',
        'position',
        'favorite',
        'favoritePosition'
    ];
}