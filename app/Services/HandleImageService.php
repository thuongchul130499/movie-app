<?php 

namespace App\Services;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;

class HandleImageService {

    public function addImage($file, $size = [400, 600]){
        if(!$file) return;
        $path = $file->hashName('movies');
        $image = Image::make($file);
        $image->fit($size[0], $size[1], function ($constraint) {
            $constraint->aspectRatio();
        });

        Storage::disk('public')->put($path, (string) $image->encode());
        return $path;
    }

    public function deleteImage(array $paths = []){
        return Storage::disk('public')->delete(array_map(function($item) {
            return '/'.$item;
        }, $paths));
    }

}