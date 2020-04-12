<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\ActorInterface;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    private $actor;

    public function __construct(ActorInterface $actor){
        $this->actor = $actor;
    }

    public function index()
    {
        return response()->json($this->actor->all(['movies']));
    }

}
