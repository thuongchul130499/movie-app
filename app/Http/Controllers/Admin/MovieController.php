<?php

namespace App\Http\Controllers\Admin;

use App\Actor;
use App\Genres;
use App\Movie;
use App\Http\Controllers\Controller;
use App\Http\Requests\MovieRequest;
use App\Repositories\Contracts\MovieInterface;
use Illuminate\Support\Facades\Http;
class MovieController extends Controller
{

    private $movie;

    public function __construct(MovieInterface $movie)
    {
        $this->movie = $movie;
    }

    public function index()
    {
//            $genres = Http::get('https://api.themoviedb.org/3/genre/movie/list?language=vi&api_key='.config('services.tmdb.token'))
//                 ->json()['genres'];
//             foreach($genres as $item){
//                 Genres::create(['name' => $item['name']]);
//            }
//        $datas = [];
//            for($i = 1; $i <= 10; $i ++) {
//                 $actors = Http::get("https://api.themoviedb.org/3/person/popular?api_key=80a93484c75e692f238dca10a5115486&language=vi&page=$i")->json()['results'];
//                 foreach($actors as $item){
//                     $item = Http::get("https://api.themoviedb.org/3/person/{$item['id']}?api_key=80a93484c75e692f238dca10a5115486&language=vi")->json();
//                     array_push($datas, [
//                         'name' => $item['name'],
//                         'birthday' => $item['birthday'] ?? date('Y-m-d'),
//                         'known_for_department' => $item['known_for_department'],
//                         'also_known_as' => json_encode($item['also_known_as']),
//                         'profile_path' => 'https://image.tmdb.org/t/p/w300/'.$item['profile_path'],
//                         'gender' => $item['gender'],
//                         'deathday' => $item['deathday'],
//                         'biography' => $item['biography'],
//                         'place_of_birth' => $item['place_of_birth'],
//                         'popularity' => $item['popularity'],
//                     ]);
//                 }
//            }
//         Actor::insert($datas);
        $movies = $this->movie->getData();

        return response()->json($movies);
    }

    public function moviesTrash()
    {
        $movies = $this->movie->getDataWithTrash();

        return response()->json($movies);
    }

    public function create()
    {
        $genres = collect(Genres::all())->map(function ($item){
            return ['id' => $item->id, 'name' => $item->name];
        });

        $actors = Actor::select(['id', 'name', 'profile_path'])->get();
        return response()->json([
            'genres' => $genres,
            'actors' => $actors
        ]);
    }

    public function store(MovieRequest $request)
    {
        return response()->json($this->movie->create($request->all()));
    }

    public function edit($id)
    {
        $with = ['images', 'genreses', 'actors'];
        $movie = $this->movie->find($id, $with);
        return response()->json(['data' => $movie], 200);
    }


    public function update(MovieRequest $request, $id)
    {
        return response()->json($this->movie->update($id, $request->all()));
    }

    public function destroy($id)
    {
        return $this->movie->destroy($id);
    }

    public function restore($id)
    {
        return Movie::onlyTrashed()->findOrFail($id)->restore();
    }
}
