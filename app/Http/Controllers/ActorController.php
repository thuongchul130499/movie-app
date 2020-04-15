<?php

namespace App\Http\Controllers;

use App\Repositories\Contracts\ActorInterface;

class ActorController extends Controller
{
    private $actor;

    public function __construct(ActorInterface $actor){
        $this->actor = $actor;
    }

    public function index()
    {
        $with = ['movies'];
        $perPage = 20;

        return response()->json($this->actor->all(
            $with,
            $perPage,
        ));
    }

    public function show($id){
        $with = [
            'movies',
        ];

        return $this->actor->find($id, $with);
    }
}
