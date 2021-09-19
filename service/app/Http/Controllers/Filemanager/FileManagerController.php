<?php

namespace App\Http\Controllers\Filemanager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileManagerController extends Controller
{
    public function index(Request $request)
    {
        return view("filemanager");
    }
}
