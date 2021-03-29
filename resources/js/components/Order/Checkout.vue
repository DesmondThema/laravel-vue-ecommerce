<template>
    <div>
        <Header></Header>
        <div class="w-full" v-show="cart.length > 0">
            <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Item</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Price</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in cart" :key="item.id">
                        <td class="p-4" v-text="item.name"></td>
                        <td class="p-4" v-text="cartLineTotal(item)"></td>
                        <td class="w-10 text-right">
                            <button
                                class="flex ml-auto text-sm text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                @click="$store.commit('removeFromCart', index)"
                            >Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold" v-text="formatAmount(cartTotal)"></td>
                        <td class="w-10 text-right"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="lg:w-2/3 w-full mx-auto mt-8">
                <div class="flex flex-wrap -mx-2 mt-8" v-if="user">
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label  for="first_name" class="leading-7 text-sm text-gray-600">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.first_name"
                                :disabled="paymentProcessing"

                            >
                        </div>
                    </div>
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="last_name" class="leading-7 text-sm text-gray-600">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.last_name"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                    <div class="p-2 w-1/3" v-if="user">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.email"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2 mt-4">
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="address" class="leading-7 text-sm text-gray-600">Street Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.address"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.city"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                    <div class="p-2 w-1/6">
                        <div class="relative">
                            <label for="province" class="leading-7 text-sm text-gray-600">Province</label>
                            <input
                                type="email"
                                id="province"
                                name="province"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.province"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                    <div class="p-2 w-1/6">
                        <div class="relative">
                            <label for="zip_code" class="leading-7 text-sm text-gray-600">Zip Code</label>
                            <input
                                type="email"
                                id="zip_code"
                                name="zip_code"
                                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                v-model="customer.zip_code"
                                :disabled="paymentProcessing"
                            >
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2 mt-4">
                    <div class="p-2 w-full" v-show="cart.length > 0">
                        <div class="relative">
                            <label for="card-element" class="leading-7 text-sm text-gray-600">Credit Card Info</label>
                            <div id="card-element"></div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-6 place-items-auto mt-4">
                    <div class="border border-solid border-gray-400">
                        <div class="ml-8 mt-4">
                            <h2 v-if="user" class="font-semibold text-xl">Available Funds: <span class="text-blue-500">{{ formatAmount(user.funds) }}</span></h2>
                            <p v-if="user && user.funds > cartTotal"> You have enough funds to pay for this order</p>
                            <p v-else class="text-red-500">You don't have enough funds to pay for this order</p>
                        </div>
                        <div class="p-2 w-full" v-if="user && user.funds > cartTotal">
                            <button
                                class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                @click="processPaymentByFunds"
                                v-text="'Use Wallet Funds'"

                            ></button>
                        </div>
                    </div>
                    <div class="border border-solid border-gray-400">
                        <div class="ml-8 mt-12">
                            <p  class="mt-2">Save your wallet funds and pay by card</p>
                        </div>
                        <div class="p-2 w-full">
                            <button
                                class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                @click="processPayment"
                                :disabled="paymentProcessing"
                                v-text="paymentProcessing ? 'Processing' : 'Use Credit Card'"
                            ></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-show="cart.length === 0">
            <h2 class="text-3xl font-bold mt-6 mb-4">Cart</h2>
            <hr/>
            <h2 class="text-3xl font-semibold mt-6 mb-4">Ooops Cart is empy!!</h2>
            <router-link to="/" tag="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SHOP NOW!
            </router-link>
        </div>
    </div>
</template>
<script>
    import Header from '../Header'
    import { loadStripe } from '@stripe/stripe-js';
    export default {
        data() {
            return {
                stripe: {},
                cardElement: {},
                customer: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    address: '',
                    city: '',
                    province: '',
                    zip_code: ''
                },
                paymentProcessing: false,
                user: null,
            }
        },
        async created () {
            await axios.get('/api/user').then((res)=> {
                this.user = res.data
            });
        },
        async mounted() {
            this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY);

            const elements = this.stripe.elements();
            this.cardElement = elements.create('card', {
                classes: {
                    base: 'bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
                }
            });

            this.cardElement.mount('#card-element');

        },
        components: {
            Header
        },
        methods: {
            cartLineTotal(item) {

                let amount = item.price;
                if (item.discount_price > 0) {
                    amount = item.discount_price
                }

                console.log(amount)

                return amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
            },
            formatAmount(amount) {
                return amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
            },
            async processPayment() {
                this.paymentProcessing = true;

                const {paymentMethod, error} = await this.stripe.createPaymentMethod(
                    'card', this.cardElement, {
                        billing_details: {
                            name: this.customer.first_name + ' ' + this.customer.last_name,
                            email: this.customer.email,
                            address: {
                                line1: this.customer.address,
                                city: this.customer.city,
                                state: this.customer.province,
                                postal_code: this.customer.zip_code
                            }
                        }
                    }
                );

                if (error) {
                    this.paymentProcessing = false;
                    console.log('Error occured')
                } else {
                    console.log('proceeding with payment')
                    //console.log(paymentMethod);
                    this.customer.payment_method_id = paymentMethod.id;
                    this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                    this.customer.cart = JSON.stringify(this.$store.state.cart);

                    axios.post('/api/purchase', this.customer)
                        .then((response) => {
                            this.paymentProcessing = false;
                            console.log(response);

                            this.$store.commit('updateOrder', response.data);
                            this.$store.dispatch('clearCart');

                            this.$router.push({ name: 'order.summary' });
                        })
                        .catch((error) => {
                            this.paymentProcessing = false;
                            console.error(error);
                        });
                }
            },
            processPaymentByFunds() {
                this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                this.customer.funds = this.user.funds
                this.customer.email = this.user.email
                if (this.isDiscounted) {
                    this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.discount_price * item.quantity), 0);
                }

                this.customer.cart = JSON.stringify(this.$store.state.cart);

                axios.post('/api/purchaseByFunds', this.customer)
                    .then((response) => {
                        this.$store.commit('updateOrder', response.data);
                        this.$store.dispatch('clearCart');

                        this.$router.push({ name: 'order.summary' });
                    })
                    .catch((error) => {
                        this.paymentProcessing = false;
                        console.error(error);
                    });
            }
        },
        computed: {
            isDiscounted() {
                if (this.$store.state.cart.reduce((acc, item) => acc + (item.discount_price) > 0, 0)) {
                    return true
                } else {
                    return false
                }
            },
            cart() {
                return this.$store.state.cart;
            },
            cartTotal() {
                let amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                if (this.isDiscounted) {
                    amount = this.$store.state.cart.reduce((acc, item) => acc + (item.discount_price * item.quantity), 0);
                }
                return amount
            }

        }
    }
</script>
