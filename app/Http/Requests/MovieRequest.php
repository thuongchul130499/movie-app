<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function all($keys = null){
        $data = parent::all($keys);
        $data['tags'] = json_decode($data['tags'], true);
        return $data;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'original_language' => 'required|max:10|min:3|unique:movies,id,' . $this->id,
            'original_title' => 'required|max:255|min:3|unique:movies,id,' . $this->id,
            'title' => 'required|max:255|min:3|unique:movies,id,' . $this->id,
            'overview' => 'required|max:3000',
            'adult' => 'numeric|between:0,1',
            'release_date' => 'required',
            'poster' => $this->isMethod('put') ? '' : 'required',
        ];
    }
}
