<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ViewModels\MovieViewModel;
use App\ViewModels\MoviesViewModel;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Carbon;
class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $popularMovies = Http::get('https://api.themoviedb.org/3/movie/popular?language=vi&api_key='.config('services.tmdb.token'))
            ->json()['results'];

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

    public function store(Request $request)
    {
        dd($request->all());
    }

}
