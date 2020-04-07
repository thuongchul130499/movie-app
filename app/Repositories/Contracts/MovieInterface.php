<?php

namespace App\Repositories\Contracts;

interface MovieInterface extends AbstractRepository {
    
    public function all();

    public function create($data);

    public function find($id);
    
}