import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStock(state, stocks) {
            state.stocks = stocks
        },
        randomStock(state) {
            state.stocks.forEach(s => {
                s.price = Math.round(s.price * (1 + Math.random() - 0.42))
            })
        }
    },
    actions: {
        initStocks({ commit }) {
            commit('setStock', stocks)
        },
        buyStock({ commit }, order) {
            commit('buyStock', order)
        },
        randomStocks({ commit }){
            commit('randomStock')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}