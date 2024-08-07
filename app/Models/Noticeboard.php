<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticeboard extends Model
{
    use HasFactory;
    protected $fillable = [
        '_title',
        '_subtitle',
        '_description',
        '_image',
        '_date',
        '_time',
        '_latlong',
        '_location',
        '_status',
    ];
}
