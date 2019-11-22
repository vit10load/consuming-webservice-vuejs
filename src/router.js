import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
            meta: {
                authRequired: false
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue'),
            meta: {
                authRequired: false
            }
        },
        {
            path: '/lista-categorias',
            name: 'ListagemDeCategoria',
            component: () => import('./views/ListagemDeCategoria'),
            meta: {

                authRequired: true
            }

        },
        {
            path: '/novo-produto',
            name: 'NovaCategoria',
            component: () => import('./views/NovaCategoria'),
            meta: {

                authRequired: true
            }

        },
        {
            path: '/produtos/:idCategoria/',
            name: 'Produtos',
            component: () => import('./views/Produtos.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/novos-produtos/',
            name: 'FormularioNovoProduto',
            component: () => import('./views/FormularioNovoProduto'),
            meta: {

                authRequired: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const status = store.getters.status; //sessionStorage.getItem("authUser")
    const authRequired = to.meta.authRequired;

    if (!authRequired){
        return next();
    }


    if (status == 'AUTHENTICATED') {
        return next();
    }
    next("/login");
});

export default router;

