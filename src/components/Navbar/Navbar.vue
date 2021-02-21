<template>
  <div>
    <!-- nav -->
    <nav class="navbar-1 w-300" pr>
      <router-link to="/"><img src="/favicon.svg" alt="StockTrader" pr><h3 class="title-logo header">stocktrader</h3></router-link>
      <button type="button" class="menu-icon" pr @click="change">
        <div></div>
        <div></div>
      </button>
      <div class="nav">
        <router-link exact to="/" active-class="active" v-wave>Início</router-link>
        <router-link exact to="/portfolio" active-class="active" v-wave>Portfólio</router-link>
        <router-link exact to="/stocks" active-class="active" v-wave>Ações</router-link>
        <div class="card-wallet">
          <p><i class="fas fa-wallet"></i> {{ funds | BRL }}</p>
        </div>
        <div class="dropdown">
          <i class="fas fa-ellipsis-v"></i>
          <div class="dropdown-content">
              <ul>
                <li v-wave @click="endDay" class="li-box"><i class="fas fa-sun"></i> Finalizar dia</li>
                <li v-wave @click="reset" class="li-box"><i class="fas fa-undo"></i> Resetar conta</li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- menu -->
    <transition name="fade">
      <div class="dark" v-if="menu" @click="change"/>
    </transition>
    <transition name="slide">
      <div class="menu" v-if="menu">
        <div class="close" @click="change"><i class="fas fa-times"></i></div>
        <h3 class="title-logo">stocktrader</h3>
        <div class="card-wallet">
          <p><i class="fas fa-wallet"></i> {{ funds | BRL }}</p>
        </div>
        <ul class="list-menu">
          <li @click="change" v-wave><router-link exact to="/" active-class="active" class="li-box"><i class="fas fa-home"></i> Início</router-link></li>
          <li @click="change" v-wave><router-link exact to="/portfolio" active-class="active" class="li-box"><i class="fas fa-layer-group"></i> Portfólio</router-link></li>
          <li @click="change" v-wave><router-link exact to="/stocks" active-class="active" class="li-box"><i class="fas fa-tags"></i> Ações</router-link></li>
        </ul>
        <hr>
        <ul class="list-menu">
          <li v-wave @click="change(), endDay()" class="li-box"><i class="fas fa-sun"></i> Finalizar dia</li>
          <li v-wave @click="change(), reset()" class="li-box"><i class="fas fa-undo"></i> Resetar conta</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { menu: false }
  },
  computed: {
    funds() { return this.$store.getters.funds }
  },
  methods: {
    change() { 
      this.menu = !this.menu
      const body = document.getElementsByTagName('body')[0]

      if(this.menu == true)
      { body.style.overflow = 'hidden' }
      else{ body.style.overflow = 'auto' }
    },
    endDay() {
      this.$store.dispatch('randomStocks')
      const { funds, stockPortfolio, stocks } = this.$store.getters
      this.$http.put('data.json', { funds, stockPortfolio, stocks })
    },
    reset() {
      this.$http.delete('data.json').then( () => {
          location.reload()
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Navbar.scss";
</style>