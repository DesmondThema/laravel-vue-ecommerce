<template>
    <div>
        <Header></Header>
        <div class="w-full">
            <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
                <h2
                    class="text-sm title-font text-gray-500 tracking-widest"
                    v-text="'Transaction ID: ' + order.transaction_id"
                ></h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Thank you for your purchase</h1>
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Item</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Quantity</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in order.products" :key="item.id">
                        <td class="p-4" v-text="item.name"></td>
                        <td class="p-4" v-text="1"></td>
                        <td class="p-4" v-text="cartLineTotal(item)"></td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold" v-text="orderQuantity"></td>
                        <td class="p-4 font-bold" v-text="orderTotal"></td>
                    </tr>
                    </tbody>
                </table>
                <router-link to="/" tag="button" class="w-full mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SHOP AGAIN!
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '../Header'
    export default {
        components: {
            Header
        },
        methods: {
            cartLineTotal(item) {
                let amount = item.price;
                if (item.discount_price > 0) {
                    amount = item.discount_price
                }
                return amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
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
            order() {
                return this.$store.state.order;
            },
            orderQuantity() {
                return 1;
            },
            orderTotal() {
                let amount = this.order.total
                return amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
            }
        }
    }
</script>
