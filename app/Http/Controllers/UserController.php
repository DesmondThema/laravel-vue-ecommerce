<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function purchase(Request $request)
    {
        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'province' => 'Limpopo',
                'zip_code' => $request->input('zip_code')
            ]
        );

        try {
            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => 1]);
            }

            $order->load('products');
            return $order;

        } catch (\Exception $e) {

            return response()->json(['message' => $e->getMessage()], 500);
        }

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|void
     */
    public function updateFunds(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'new_funds' => 'required'
        ]);

        $newFunds = $request->get('new_funds');
        if ($newFunds < 0 || $newFunds == 0) {
            return;
        }

        $funds = $newFunds + $request->get('existing_funds');

        try {
            $user = User::where('email', '=', $request->get('email'))
                ->firstOrFail();
            $user->update(['funds' => $funds]);

        } catch (\Exception $e) {

            return response()->json(['message' => $e->getMessage()], 500);
        }

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function purchaseByFunds(Request $request)
    {
        $funds = $request->get('funds');
        $total = $request->get('amount');

        $updatedFunds = $funds - $total;

        try {
            $user = User::where('email', '=', $request->get('email'))
                ->firstOrFail();

            $user->update([
                'funds' => $updatedFunds
            ]);

            $order = $user->orders()
                ->create([
                    'transaction_id' => sprintf('funds_%d', $user->id) ,
                    'total' => $request->get('amount')
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => 1]);
            }
            $order->load('products');
            return $order;


        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);

        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Support\Collection
     */
    public function orders(Request $request)
    {
        $userId = $request->get('id');
        return DB::table('orders')
            ->where('user_id', '=', $userId)
            ->get();

    }
}
