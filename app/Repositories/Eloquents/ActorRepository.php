<?php

namespace App\Repositories\Eloquents;
use App\Actor;
use App\Repositories\Contracts\ActorInterface;

class ActorRepository extends BaseRepository implements ActorInterface {

    public function model(){
        return new Actor();
    }

    public function all($with, $perPage = 10){
        $itemsPaginated = $this->model()->with($with)->paginate($perPage);
        $itemsTransformed = $itemsPaginated
            ->getCollection()
            ->map(function($item) {
                $format = collect($item['also_known_as'])->map(function($value) {
                    return json_decode($value);
                });

                $moviesName = collect($item['movies'])->map(function($value) {
                    return $value['original_title'];
                });
                return collect($item)->merge([
                    'also_known_as' => $format,
                    'deathday' => $item['deathday'] ?? 'Chưa rõ',
                    'movies' => $moviesName,
                ]);
        })->toArray();

        $itemsTransformedAndPaginated = new \Illuminate\Pagination\LengthAwarePaginator(
            $itemsTransformed,
            $itemsPaginated->total(),
            $itemsPaginated->perPage(),
            $itemsPaginated->currentPage(), [
                'path' => request()->url(),
                'query' => [
                    'page' => $itemsPaginated->currentPage()
                ]
            ]
        );
        return $itemsTransformedAndPaginated;
    }

    public function create($data){

    }

    public function find($id, $with){
        $actor = $this->model()->with($with)->findOrFail($id);
        return collect($actor)->merge([
            'also_known_as' => json_decode($actor->also_known_as),
            'movies' => $actor->movies->map(function($val) {
                return [
                    'id' => $val->id,
                    'name' => $val->title,
                    'path' => $val->poster_path,
                ];
            })
        ]);
    }
}
