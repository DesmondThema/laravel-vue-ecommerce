require('./bootstrap')

import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

function isLoggedIn() {
    return localStorage.getItem('auth')
}

router.beforeEach((to, from, next) => {
   if (to.matched.some(record => record.meta.authOnly)) {
       if (!isLoggedIn()) {
           next({
               path: '/login',
               query: {redirect: to.fullPath }
           })
       } else {
           next()
       }
   } else {
       next()
   }
})

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {}
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
            if (productInCartIndex !== -1) {

                alert('You can only add one product to cart')
                return;
            }

            product.quantity = 1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        }
    },
    actions: {
        getCategories({commit}) {
            console.log('no action');
            // fetch the categories and attached products from the api
            axios.get('/api/products')
                .then((response) => {
                    console.log(response)
                    commit('updateProducts', response.data);
                })
                .catch((error) => console.error(error));
        },
        clearCart({commit}) {
            commit('updateCart', []);
        }
    }
});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getCategories')
            .then(_ => {})
            .catch((error) => console.error(error));
    }
});
