<?php

namespace App\Http\Controllers\Admin;

use App\Genres;
use App\Http\Controllers\Controller;
use App\Http\Requests\MovieRequest;
use App\Repositories\Contracts\MovieInterface;
use Illuminate\Http\Request;
class MovieController extends Controller
{

    private $movie;

    public function __construct(MovieInterface $movie)
    {
        $this->movie = $movie;
    }

    public function index()
    {
        $movies = $this->movie->all(['genreses']);
        
        return response()->json($movies);
    }

    public function create()
    {
        // $genres = Http::get('https://api.themoviedb.org/3/genre/movie/list?language=vi&api_key='.config('services.tmdb.token'))
        //     ->json()['genres'];
        // foreach($genres as $item){
        //     Genres::create(['name' => $item['name']]);
        // }
        $datas = collect(Genres::all())->map(function ($item){
            return ['id' => $item->id, 'name' => $item->name];
        });
        return response()->json($datas);
    }

    public function store(MovieRequest $request)
    {
        if($this->movie->create($request->all())){
            $msg = 'Tạo mới phim thành công';
            $code = 200;
        }else{
            $msg = 'Tạo mới phim thất bại';
            $code = 500;
        }

        return response()->json(['message' => $msg], $code);
    }

    public function show($id)
    {
        
    }


    public function edit($id)
    {
        $movie = $this->movie->find($id);
        return response()->json(['data' => $movie ], 200);
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
