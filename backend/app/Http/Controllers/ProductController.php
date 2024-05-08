<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function getTopproduct(Request $request, $categoryName)
    {
        $company = $request->query('company');
        $top = $request->query('top');
        $min = $request->query('min');
        $max = $request->query('max');
        $page = $request->query('page', 1);
        $sortBy = $request->query('sortBy', 'rating');
        $sortOrder = $request->query('sortOrder', 'desc');

        $accessToken = config('services.test_server.access_token');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken
        ])->get("http://20.244.56.144/test/companies/$company/categories/$categoryName/product", [
                    'top' => $top,
                    'min' => $min,
                    'max' => $max
                ]);

        // Process response and format as needed
        $product = $response->json();
        foreach ($product as $key => &$product) {
            $product['product_id'] = "{$company}-{$categoryName}-{$key}";
        }

        $perPage = $top > 10 ? $top : 10;
        $startIndex = ($page - 1) * $perPage;
        $paginatedproduct = array_slice($product, $startIndex, $perPage);

        if ($sortBy === 'price' || $sortBy === 'rating' || $sortBy === 'discount') {
            usort($paginatedproduct, function ($a, $b) use ($sortBy, $sortOrder) {
                if ($sortOrder === 'asc') {
                    return $a[$sortBy] <=> $b[$sortBy];
                } else {
                    return $b[$sortBy] <=> $a[$sortBy];
                }
            });
        }

        return response()->json($paginatedproduct);
    }

    public function getProductDetails(Request $request, $categoryName, $productId)
    {
        $company = $request->query('company'); // Fetch the company from the request


        $accessToken = config('services.test_server.access_token');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken
        ])->get("http://20.244.56.144/test/categories/$categoryName/product/$productId");

        $productDetails = $response->json();

        return response()->json($productDetails);
    }

}
