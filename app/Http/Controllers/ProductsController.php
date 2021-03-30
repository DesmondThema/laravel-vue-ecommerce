<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;
use App\Http\Controllers\LoginController;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'designer' => 'required',
            'price' => 'required',
            'file' => 'required',
        ]);

        $request->file->store('products', 'public');

        $price = $request->get('price');
        $name = $request->get('name');

        $product = new Product([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'designer' => $request->get('designer'),
            'price' => $price,
            'discount_price' => self::calculateDiscount($price),
            'file_path' => $request->file->hashName(),
            'slug' => Str::slug($name)
        ]);

        $product->save();

        return redirect('/admin');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function products()
    {
        return Product::all();
    }

    /**
     * @param $price
     * @return float|int
     */
    public static function calculateDiscount($price) {

        $discount = 0;

        if ($price >= 112 && $price >= 115) {
            $discount = $price * 0.25;
        }
        if ($price > 120) {
            $discount = $price * 0.5;
        }

        return round($discount);
    }


}
