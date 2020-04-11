<?php

namespace App\Repositories\Eloquents;
use App\Movie;
use App\Repositories\Contracts\MovieInterface;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use DB;
use App\ViewModels\Admin\MoviesViewModel;
class MovieRepository extends BaseRepository implements MovieInterface {

    private static $with = ['images', 'genreses'];
    public function model(){
        return new Movie;
    }

    public function all($with = [], $data = [], $dataSelect = ['*'])
    {
        return $this->model()
            ->select($dataSelect)
            ->with($with)
            ->paginate(5);
    }

    public function create($data){
        try{
            DB::beginTransaction();
            $poster_path = $this->handleImage($data['poster'], config('settings.movie.poster'));
            $movie = $this->model()->create($this->getParamMovie($data, $poster_path, $poster_path));
            if($data['images'] ?? false){
                foreach($data['images'] as $image){
                    $path = $this->handleImage($image, [500, 280]);
                    $image = json_encode([
                        'original_name' => $image->getClientOriginalName(),
                        'file_path' => $path,
                        'height' => 500,
                        'width' => 280,
                        'vote_average' => 0,
                        'vote_count'=> 0,
                        'type' => $image->getClientMimeType() .'.'. $image->extension(),
                        'size' => $image->getSize(),
                    ]);
                    $movie->images()->create([
                        'backdrops' => $image,
                        'posters' => $image,
                    ]);
                }
            }
            $tag_ids = array_map(function($item){
                return $item['id'];
            }, $data['tags']);
            $movie->actors()->attach(explode(',' , $data['actor_ids']));
            $movie->genreses()->attach($tag_ids);
            DB::commit();

            return true;
        }catch(\Exception $e){
            dd($e->getMessage());
            DB::rollback();
            return false;
        }
    }

    public function find($id)
    {
        return $this->model()
                    ->with(static::$with)
                    ->findOrFail($id);
    }

    private function handleImage($file, $size = [500, 700]){
        $path = $file->hashName('movies');
        $image = Image::make($file);
        $image->fit($size[0], $size[1], function ($constraint) {
            $constraint->aspectRatio();
        });

        Storage::disk('public')->put($path, (string) $image->encode());
        return $path;
    }

    private function getParamMovie($data, $poster_path = '', $backdrop_path = ''){
        $data['poster_path'] = $poster_path;
        $data['backdrop_path'] = $backdrop_path;
        $data['popularity'] = 0;
        $data['spoken_languages'] = 'EN, Vi';
        return $data;
    }
}
