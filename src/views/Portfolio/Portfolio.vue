<template>
  <div>
    <h1 class="title-1 sp-4">Portfólio</h1>
    <!-- has stock? -->
    <template v-if="stocks != ''">
      <div class="list-stock">
        <router-link 
          :to="{ path: `/portfolio/${stock.code.toLowerCase()}` }" 
          :key="stock.code"
          v-wave="{color: '#404040'}" 
          v-for="(stock, i) in stocks"
          class="stock" 
        >
          <div class="name">
            <h3>{{ stock.code }}</h3>
            <p>{{ stock.name }}</p>
          </div>
          <div class="price">
            <h3>{{ stock.price | BRL}}</h3>
            <p :class="{ valued: situation[i] > 0, 'devalued': situation[i] < 0, 'stopped': situation[i] == 0 }">{{ situation[i] }}%</p>
          </div>
        </router-link>
      </div>
    </template>
    <template v-else>
      <div class="no-stock">
        Você não possui ações
      </div>
      <router-link to="/stocks" class="link sp-4" v-wave="{color: '#404040'}">Comprar ações</router-link>
    </template>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  computed: {
    stocks() { return _.orderBy(this.$store.getters.stockPortfolio, 'code') },
    situation() {
      return this.stocks.map(i => {
        const s = (((i.price - i.priceBuyed)/i.priceBuyed)*100).toFixed(2)
        return s
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/variables.scss";
  @import "@/styles/list-stock.scss";

  .no-stock{
    position: relative;
    width: 100%;
    height: 70px;
    border: 2px dashed $c2;
    border-radius: 10px;
    color: $c4;
    text-align: center;
    line-height: 70px;
    font-size: 16px;
    user-select: none;
    margin-bottom: 20px;
  }

  .link{
    text-align: center;
    position: relative;
    display: block;
    color: $c7;
    text-decoration: underline;
    border-radius: 20px;
  }

  @media(min-width: 700px){
    .no-stock{
      height: 90px;
      line-height: 90px;
      border-width: 4px;
      font-size: 20px;
      font-weight: 500;
    }

    .link{
      font-size: 17px;
    }
  }
</style>