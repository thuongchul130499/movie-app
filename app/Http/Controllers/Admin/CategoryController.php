<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->getCate()->categories;
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $cate = $this->getCate();
        if(is_object($cate)){
            $cate->categories = $request->all()['categories'];
            $cate->save();
        }else{
            Category::create(['categories' => $request->all()['categories']]);
        }
        
        return response()->json($this->getCate(), 200);
    }

    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    private function getCate(){
        $cate = Category::first();
        if(is_null($cate)){
            return [];
        }

        return $cate; 
    }
}
