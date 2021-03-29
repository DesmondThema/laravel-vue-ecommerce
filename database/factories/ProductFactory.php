<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Http\Controllers\ProductsController;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $productSuffix = ['Sneakers', 'Sweaters', 'Shirts', 'Jeans', 'Pants'];
        $name = $this->faker->company . ' ' . Arr::random($productSuffix);

        $price = $this->faker->numberBetween(100, 3000);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->realText(100),
            'price' => $price,
            'discount_price' => ProductsController::calculateDiscount($price),
            'designer' => $this->faker->word,
            'file_path' => $this->faker->image('public/storage/products', 640,480, null, false)
        ];
    }
}
