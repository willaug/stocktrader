import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import axios from 'axios'
//import axios from './plugins/axios'
//views
import Home from './views/Home'
import Stocks from './views/Stock/Stocks'
import Portfolio from './views/Portfolio/Portfolio'
import Portfolio_Stock from './views/Portfolio/Portfolio_Stock'
import Buy_Stock from './views/Stock/Buy_Stock'

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
