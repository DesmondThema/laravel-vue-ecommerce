<template>
    <div>
        <Header></Header>
        <section class="text-gray-700 body-font overflow-hidden" v-if="product">
            <div class="container px-4 py-24 mx-auto">
                <div class="lg:w-3/5 mx-auto flex flex-wrap">
                    <img v-if="product.file_path == 0" alt="ecommerce" class="object-cover object-center w-1/2 h-66 block"
                         src="/images/palledium.jpeg">
                    <img v-else alt="ecommerce" class="object-cover object-center w-1/2 h-66 block" :src="'/storage/products/' + product.file_path">
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2
                            class="text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2"
                            v-for="category in product.categories"
                            v-text="product.name"
                        ></h2>
                        <h1
                            class="text-gray-900 text-3xl title-font font-medium mb-2"
                            v-text="product.name"
                        ></h1>
                        <p
                            class="leading-relaxed"
                            v-text="product.description"
                        ></p>
                        <div class="flex mt-6 pt-4 border-t-2 border-gray-200">
                        <span v-if="product.discount_price > 0"
                              class="title-font font-medium text-2xl text-gray-900"
                        >
                            {{ formatCurrency(product.discount_price) }}
                            <span class="line-through">{{ formatCurrency(product.price) }}</span>
                        </span>
                            <span v-else>
                            {{ formatCurrency(product.price) }}
                        </span>
                            <button
                                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                                @click="addToCart(product)"
                            >Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Header from '../Header'
    export default {
        components: {
            Header
        },
        methods: {
            formatCurrency(amount) {
                return amount.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });
            },
            addToCart(product) {
                let auth = localStorage.getItem("auth")
                if (auth) {
                    return this.$store.commit('addToCart', product)
                }
                this.$router.push({ name: "auth.login"});
            }
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.products.find(product => product.slug === this.$route.params.slug);
            }
        }
    }
</script>
