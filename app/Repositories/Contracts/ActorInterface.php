<?php

namespace App\Repositories\Contracts;

interface ActorInterface extends AbstractRepository {
    
    public function all($with);

    public function create($data);

    public function find($id, $with);
    
}