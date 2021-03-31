# About Steetware.co.za

Streetware.co.za is a basic online shopping system powered by [Laravel](https://laravel.com/) at the back engine, [VueJs](https://vuejs.org/) at the front office and [TailwindCss](https://tailwindcss.com)

# Features

##### Login and Registration

Auth is powered by [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum) which provides a featherweight authentication for Single Page Applications (SPAs).

##### Top up user funds used for purchasing
This feature allow users to top up their accounts, similar to redeeming a gift voucher

##### Payment Methods 

Streetware allow users to pay by funds, if user does not have enough funds to pay for the order, they can top up their account or Pay by a credit card. Credit card payment option is powered by [Laravel Cashier](https://laravel.com/docs/8.x/billing) and [Stripe](https://stripe.com/en-gb-us)

## Local Installation
1. Clone this repo  
`git clone https://github.com/DesmondThema/laravel-vue-ecommerce.git`
2. cd into project  
`cd laravel-vue-ecommerce`
3. Install composer  
`composer install`
4. Install NPM Dependencies  
`npm install`
5. Copy the .env.example file and rename it into the .env file  
`copy .env.example .env` 
6. Generate application key  
`php artisan key:generate  
`
7. Create database. 
Create an empty database for your project using the database tools you prefer (My favorite is SequelPro for mac). In the .env file fill in your database credentials
8. Stripe intergration  
 Head over to [Stripe](https://stripe.com/en-gb-us), create a free account and copy your secret keys. In the .env file put in your stripe key and stripe skey.
 `STRIPE_KEY=your_key`. 
 `STRIPE_SECRET=your_secret_key`. 
9. Set Stateful domain. 
 `SANCTUM_STATEFUL_DOMAIN=`. 
 This will allow Sanctum to authenticate SPA, should be the domain you are running this project on, eg 127.0.0.1:8000 or desmond.test
11. Migrate the database  
`php artisan migrate:fresh` 
10. Link Storage  
`php artisan storage:link` 
11. Create products folder 
In public directory, there's a new folder called storage, in storage folder create a new folder called `products`
10. Seed the database(Optional)  
`php artisan db:seed` 
this will fill the database with dummy data.  
11. Build assets. 
12. `npm run dev`
13. Run the application  
`php artisan serve`  

## Admin Section. 
- Normal users are excluded from seeing the link to admin on the navigation bar. 
- Only admin user can see this link. When the seed ran, it created admin user with the following details. 
`email: admin@admin.com`. 
`password: password`. 
Admin section is used to create products, when you click add product button. In the future it can be used to view orders and create other admin users.

## Potential Features for improvement
- Order confirmation email
- Put admin under auth.
- Have user roles (admin and normal user)
- Show list of orders and revenue on admin
- Allow users to select product size.
- Allow users to add to wishlist.
- Persist the cart on page refresh
- Order confirmation email 
