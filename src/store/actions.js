import Vue from 'vue'

export default {
    loadData({ commit }){
        Vue.prototype.$http('data.json').then( r => {
            const data = r.data
            if(data) {
                commit('setStock', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}