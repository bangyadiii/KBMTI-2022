<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ComingSoonController extends Controller
{
    public function index()
    {
        return Inertia::render('Sth/ComingSoon');
    }
}
