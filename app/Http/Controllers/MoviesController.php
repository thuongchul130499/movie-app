<?php

namespace App\Http\Controllers;

use App\Image;
use App\Movie;
use Illuminate\Http\Request;
use App\ViewModels\MovieViewModel;
use App\ViewModels\MoviesViewModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private function crawl($num){
        $rands = range(0, $num);
        shuffle($rands );
        return $rands = array_slice($rands ,5,rand(5, 10));
    }
    public function index()
    {
        $popularMovies = Http::get('https://api.themoviedb.org/3/movie/popular?language=vi&api_key='.config('services.tmdb.token'))
            ->json()['results'];
//        $data = [];
//        $genres = $this->crawl(19);
//        $actors = $this->crawl(200);
//        try{
//            DB::beginTransaction();
//                foreach ($popularMovies as $item) {
//                    $movie = Http::get('https://api.themoviedb.org/3/movie/' . $item['id'] . '?append_to_response=credits,videos,images&api_key=' . config('services.tmdb.token'))->json();
//                    $data = [
//                        'original_language' => $item['original_language'],
//                        'original_title' => $item['original_title'],
//                        'adult' => $item['adult'],
//                        'overview' => $movie['overview'],
//                        'poster_path' => 'https://image.tmdb.org/t/p/w500' . $item['poster_path'],
//                        'popularity' => $item['popularity'],
//                        'backdrop_path' => 'https://image.tmdb.org/t/p/w500' . $item['backdrop_path'],
//                        'budget' => $movie['budget'],
//                        'release_date' => $item['release_date'],
//                        'vote_average' => $item['vote_average'],
//                        'title' => $item['title'],
//                        'revenue' => 0,
//                        'vote_count' => 0,
//                        'spoken_languages' => 'EN, VI',
//                        'tagline' => '#kinh_di, #tau_hai',
//                        'status' => 'released'
//                    ];
//                    $create = Movie::create($data);
//                    $create->genreses()->attach($genres);
//                    $create->actors()->attach($actors);
//                    $abc = [];
//                    foreach ($movie['images']['backdrops'] as $v) {
//                        $poster = json_encode([
//                            'original_name' => "Phim Hay",
//                            'file_path' => 'https://image.tmdb.org/t/p/w500/' . $v['file_path'],
//                            'height' => $v['height'],
//                            'width' => $v['width'],
//                            'vote_average' => $v['vote_average'],
//                            'vote_count' => $v['vote_count'],
//                            'type' => '.jpg',
//                            'size' => 0,
//                        ]);
//                        array_push($abc, [
//                            'posters' => $poster,
//                            'backdrops' => $poster,
//                            'movie_id' => $create->id
//                        ]);
//                    }
//                    Image::insert($abc);
//                }
//            DB::commit();
//        }catch (\Exception $e){
//            DB::rollBack();
//            dd($e->getMessage());
//        }
        $nowPlayingMovies = Http::get('https://api.themoviedb.org/3/movie/now_playing?language=vi&api_key='.config('services.tmdb.token'))
            ->json()['results'];

        $genres = Http::get('https://api.themoviedb.org/3/genre/movie/list?language=vi&api_key='.config('services.tmdb.token'))
            ->json()['genres'];

        $viewModel = new MoviesViewModel(
            $popularMovies,
            $nowPlayingMovies,
            $genres
        );

        return json_encode($viewModel->getData());
    }

    public function show($id)
    {
        $movie = Http::get('https://api.themoviedb.org/3/movie/'.$id.'?append_to_response=credits,videos,images&api_key='.config('services.tmdb.token'))
            ->json();
        $viewModel = new MovieViewModel($movie);

        return json_encode($viewModel->get());
    }

    public function search()
    {
        $term = request()->all()['query'];
        if(!empty($term)){
            $data = Movie::search($term)
                    ->where('title', 'LIKE', '%' . $term . '%')
                    ->orWhere('original_title', 'LIKE', '%' . $term . '%')
                    ->paginate(10);
        }else{
            $data = [];
        }
        return response()->json($data);
    }

}
