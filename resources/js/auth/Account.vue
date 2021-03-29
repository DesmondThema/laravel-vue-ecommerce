<template>
    <div>
        <Header></Header>
        <div class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold bt-1">Wallet</h1>
                <div class="grid grid-cols-2 gap-6 place-items-auto h-48 mt-8">
                    <div class="border border-solid border-gray-400">
                        <div class="ml-8 mt-8">
                            <h2 v-if="user" class="font-semibold text-xl">Available Funds: <span class="text-blue-500"> R{{user.funds}}</span></h2>
                            <p v-if="user && user.funds === 0" class="mt-2">You have no wallet Funds.</p>
                            <p v-else class="mt-2">You have funds to Shop. Enjoy your shopping Spree</p>
                        </div>
                        <div class="text-center mt-6">
                            <router-link to="/" tag="button" class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                SHOP NOW!
                            </router-link>
                        </div>
                    </div>
                    <div class="border border-solid border-gray-400">
                        <div class="ml-8 mt-8">
                            <h2 class="font-semibold text-xl">Add funds to wallet</h2>
                            <input type="text" name="amount" id="amount"
                                   placeholder="R Amount"
                                   class="mt-2 bg-gray-100
                                    rounded border border-gray-400
                                    focus:outline-none focus:border-indigo-500
                                    text-base py-2 px-4" v-model="form.funds"
                            >
                        </div>
                        <div class="mt-6 ml-8">
                            <button @click.prevent="updateFunds" class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                REEDEM!
                            </button>
                        </div>
                        <div class="mt-6 ml-8">
                            <p v-if="success" class="mt-2">Funds Added, Enjoy your shopping Spree</p>
                        </div>
                    </div>
                </div>

            <div class="mt-8">
                <h1 class="text-3xl font-bold bt-1">Orders</h1>
                <div class="mx-auto py-10 sm:px-6" v-if="orders.length > 0">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="table-fixed w-full">
                                        <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Transaction ID
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Order Amount
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Order Created Date
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                        <tr v-for="order in orders">
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{ order.transaction_id }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">R{{ order.total }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{ order.created_at }}</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    You haven't purchased any products

                </div>
            </div>
            </div>
        </div>
    </div>

</template>
<script>
    import Header from '../components/Header'
    export default {
        data(){
            return{
                form:{
                    funds: '',
                },
                user: null,
                success: false,
                orders: {}
            }
        },
        components: {
            Header
        },
        async created () {
            await axios.get('/api/user').then((res)=> {
                this.user = res.data
            });

            this.getOrders()
        },
        methods:{
            updateFunds() {
                axios.post('/api/funds',
                    {
                        email: this.user.email,
                        new_funds: this.form.funds,
                        existing_funds: this.user.funds
                    }
                    ).then(() => {
                    this.success = true
                    this.$forceUpdate();
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                })
            },
            getOrders() {
                axios.post('/api/orders', this.user).then((res) => {
                    this.orders = res.data

                }).catch((error) => {
                    console.log(error)
                })
            },
            logout(){
                axios.post('/api/logout').then(()=>{
                    localStorage.removeItem("auth")
                    this.$router.push({ name: "Home"})
                })
            }
        },
    }
</script>
