<template>
  <div>
    <div v-for="stock in stocks" :key="stock.code"  class="stock-container">
      <div class="quantity">{{ stock.quantity }}</div>
      <img :src="`/icons/${code.toLowerCase()}.svg`"  :alt="stock.name">
      <h1>{{ code.toUpperCase() }}</h1>
      <h3>{{ stock.name }}</h3>
      <div class="price">
        <h2>{{ stock.price * stock.quantity | BRL }}</h2>
        <div class="situation" :class="{ valued: situation > 0, 'devalued': situation < 0, 'stopped': situation == 0 }">{{ situation }}%</div>
      </div>
      <div class="sell">
        <input type="text" placeholder="Qtde. de ações" readonly v-model.number="quantity">
        <div class="selection">
          <button type="button" v-wave @click="quantity++" :disabled="insufficientStocks" :class="{ insufficient: insufficientStocks }"><i class="fas fa-plus"></i></button>
          <button type="button" v-wave @click="quantity--" :disabled="quantity <= 1 || quantity == ''" :class="{ insufficient: quantity == 1 || quantity == ''}"><i class="fas fa-minus"></i></button>
        </div>
        <button type="button" class="stock-action" v-wave @click="sellStock" :disabled="quantity == ''" :class="{ insufficient: quantity == ''}">VENDER</button>
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
      return this.$store.getters.stockPortfolio.filter((i) => i.code == this.code.toUpperCase())
    },
    insufficientStocks() {
      return (this.quantity + 1) > this.stocks[0].quantity
    },
    situation() {
      const i = this.stocks[0]
      const s = (((i.price - i.priceBuyed)/i.priceBuyed)*100).toFixed(2)
      return s
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockCode: this.stocks[0].code,
        stockPrice: this.stocks[0].price,
        quantity: this.quantity
      }

      this.$store.dispatch('sellStock', order)
      this.quantity = ''

      const { funds, stockPortfolio, stocks } = this.$store.getters
      this.$http.put('data.json', { funds, stockPortfolio, stocks })

      if(this.stocks == ''){
        this.$router.push('/portfolio')
      }
    }
  },
  created() {
    document.title = `${this.code.toUpperCase()} | Stocktrader`
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/stock.scss';
</style>