<template>
    <section class="text-gray-700 body-font">
        <Header></Header>
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
                <div
                    class="lg:w-1/4 md:w-1/2 p-4 w-full mb-4"
                    v-for="product in products"
                    :key="product.id"
                >
                    <router-link
                        class="block relative h-48 rounded overflow-hidden"
                        :to="{name: 'products.show', params: {slug: product.slug}}"
                    >
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="'/storage/products/' + product.file_path">
                    </router-link>
                    <div class="mt-4">
                        <h3
                            class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
                            v-for="category in product.categories"
                            v-text="category.name"
                        ></h3>
                        <h2
                            class="text-gray-900 title-font text-lg font-medium"
                            v-text="product.name"
                        ></h2>
                        <p v-if="product.discount_price > 0"  class="mt-1">
                            <span>{{ formatCurrency(product.discount_price) }}</span>
                            <span class="line-through mx-3">{{ formatCurrency(product.price) }}</span>
                        </p>
                        <p v-else>
                            <span>{{ formatCurrency(product.price) }}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Header from '../Header'
    export default {
        data() {
            return {
                isLoggedIn: false
            }
        },
        mounted() {
            this.isLoggedIn = !! localStorage.getItem('auth')
        },
        components: {
            Header
        },
        methods: {
            formatCurrency(amount) {
                return amount.toLocaleString('en-US', { style: 'currency', currency: 'ZAR' });
            },
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
        }
    }
</script>
