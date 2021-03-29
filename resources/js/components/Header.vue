<template>
    <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50 Q ,60 10,30 z">

                    </path>
                </svg>
                <span class="ml-3 text-xl">StreetWare.co.za</span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <router-link
                    class="mr-5 hover:text-gray-900"
                    to="/"
                >
                    Products
                </router-link>
            </nav>
            <router-link
                v-if="!isLoggedIn"
                class="inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
                to="/login"
            > Login
            </router-link>
            <router-link
                v-if="!isLoggedIn"
                class="inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
                to="/register"
            > Register
            </router-link>
            <router-link
                v-if="isLoggedIn"
                class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                :to="{name: 'order.checkout'}"
            >
                Checkout<span class="inline-block ml-1" v-text="'(' + $store.state.cart.length + ' items)'"></span>
            </router-link>
            <router-link
                v-if="isLoggedIn"
                class="inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
                to="/account"
            > Account
            </router-link>
            <router-link
                v-if="isLoggedIn"
                @click.native="logout"
                class="inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
                to="/logout"
            > Logout
            </router-link>
        </div>
    </header>

</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isLoggedIn: false
            }
        },
        methods: {
            logout() {
                axios.post('/api/logout').then(() => {
                    localStorage.removeItem("auth")
                    this.$router.push({ name: "products.index"});
                }).catch((error) =>{
                    this.errors = error.response.data.errors;
                })
            }
        },
        mounted() {
            this.isLoggedIn = !! localStorage.getItem('auth')
        },

    }
</script>

<style scoped>

</style>
