export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockCode, quantity, priceBuyed, stockPrice }) {
            const record = state.stocks.find(element => element.code == stockCode )

            if(record) {
                record.quantity += quantity
                record.priceBuyed = priceBuyed
            } else{
                state.stocks.push({
                    code: stockCode,
                    quantity: quantity,
                    priceBuyed: priceBuyed
                })
            }

            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockCode, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.code == stockCode )

            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }

            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio: []
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map( s => {
                const record = getters.stocks.find(e => e.code == s.code)
                return {
                    code: s.code,
                    quantity: s.quantity,
                    priceBuyed: s.priceBuyed,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}