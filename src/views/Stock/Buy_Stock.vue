<template>
  <div>
    <div v-for="stock in stocks" :key="stock.code"  class="stock-container">
      <img :src="`/icons/${code.toLowerCase()}.svg`"  :alt="stock.name">
      <h1>{{ code.toUpperCase() }}</h1>
      <h3>{{ stock.name }}</h3>
      <div class="price">
        <h2 v-if="quantity == ''">{{ stock.price | BRL }}</h2>
        <h2 v-else>{{ stock.price * quantity | BRL }}</h2>
      </div>
      <div class="sell">
        <input type="text" placeholder="Qtde. de ações" readonly v-model.number="quantity">
        <div class="selection">
          <button type="button" v-wave @click="quantity++" :disabled="insufficientFunds" :class="{ insufficient: insufficientFunds }"><i class="fas fa-plus"></i></button>
          <button type="button" v-wave @click="quantity--" :disabled="quantity <= 1 || quantity == ''" :class="{ insufficient: quantity == 1 || quantity == ''}"><i class="fas fa-minus"></i></button>
        </div>
        <button type="button" class="stock-action" v-wave @click="buyStock" :disabled="quantity == ''" :class="{ insufficient: quantity == ''}">COMPRAR</button>
      </div>
    </div>
    <funds/>
  </div>
</template>

<script>
export default {
  props: ['code'],
  data() { 
    return { 
      quantity: ''
    } 
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks.filter((i) => i.code == this.code.toUpperCase())
    },
    insufficientFunds(){
      return (this.quantity + 1) * this.stocks[0].price > this.$store.getters.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockCode: this.stocks[0].code,
        stockPrice: this.stocks[0].price,
        priceBuyed: this.stocks[0].price,
        quantity: this.quantity
      }

      this.$store.dispatch('buyStock', order)
      this.quantity = ''

      const { funds, stockPortfolio, stocks } = this.$store.getters
      this.$http.put('data.json', { funds, stockPortfolio, stocks })
    }
  },
  created() {
    document.title = `Comprar ${this.code.toUpperCase()} | Stocktrader`
  },
  beforeEnter: (to, from, next) => {
    const code = (this.$store.getters.stocks.filter((item) => item.code == (to.params.code).toUpperCase() )).length

    if(code == 0){
        document.title = 'Comprar ações | Stocktrader'
        next('/stocks')
    }else{
        next()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/stock.scss';
</style>