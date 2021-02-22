import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import axios from 'axios'
//views
const Home = () => import('./views/Home')
const Stocks = () => import('./views/Stock/Stocks')
const Portfolio = () => import('./views/Portfolio/Portfolio')
const Portfolio_Stock = () => import('./views/Portfolio/Portfolio_Stock')
const Buy_Stock = () => import('./views/Stock/Buy_Stock')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {  
            name: 'home',
            path: '/',
            meta: { title: 'Stocktrader: Compra e venda de ações.' },
            component: Home
        },
        {
            name: 'stocks',
            path: '/stocks',
            meta: { title: 'Comprar ações | Stocktrader' },
            component: Stocks
        },
        {
            name: 'buy_stock',
            path: '/stocks/:code',
            props: true,
            meta: { title: 'Processando... | Stocktrader' },
            component: Buy_Stock,

            beforeEnter: (to, from, next) => {
                store.dispatch('loadData').then(() => {
                    const code = (store.getters.stocks.filter((item) => item.code == (to.params.code).toUpperCase() )).length
    
                    if(code == 0){
                        document.title = 'Comprar ações | Stocktrader'
                        next('/stocks')
                    }else{
                        next()
                    }
                })
            }
        },
        {
            name: 'portfolio',
            path: '/portfolio',
            meta: { title: 'Meu portfólio de ações | Stocktrader' },
            component: Portfolio
        },
        {
            name: 'portfolio_stock',
            props: true,
            path: '/portfolio/:code',
            component: Portfolio_Stock,
            meta: { title: 'Processando... | Stocktrader' },

            beforeEnter: (to, from, next) => {
                axios.get('https://stocktrader-b4ecf-default-rtdb.firebaseio.com/data/stockPortfolio.json').then(d => {
                    const code = (d.data.filter((item) => item.code == (to.params.code).toUpperCase() )).length
    
                    if(code == 0){
                        document.title = 'Meu portfólio de ações | Stocktrader'
                        next('/portfolio')
                    }else{
                        next()
                    }
                }).catch(() => {
                    document.title = 'Meu portfólio de ações | Stocktrader'
                    next('/portfolio')
                })
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
