<?php

namespace App\Repositories\Contracts;

interface MovieInterface extends AbstractRepository {
    
    public function all($with);

    public function create($data);

    public function find($id, $with = []);

    public function update($id, $data);

    public function destroy($id);
    
}