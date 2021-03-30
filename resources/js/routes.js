module.exports = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('./auth/Login.vue'),
        meta: { guest: true }
    },
    {
        path: '/register/',
        name: 'auth.register',
        component: () => import('./auth/Register.vue'),
        meta: { guest: true }
    },
    {
        path: '/account/',
        name: 'Account',
        component: () => import('./auth/Account.vue'),
        meta: { authOnly: true }
    },
    {
        path: '/',
        name: 'products.index',
        component: () => import('./components/Products/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'products.show',
        component: () => import('./components/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./components/Order/Checkout.vue'),
        meta: { authOnly: true }
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./components/Order/Summary.vue'),
        meta: { authOnly: true }
    }
];
