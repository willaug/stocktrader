<template>
  <div>
    <h1 class="title-1 sp-4">Comprar ações</h1>
    <template>
      <funds/>
      <div class="list-stock">
        <router-link 
          :to="{ path: `/stocks/${stock.code.toLowerCase()}` }" 
          :key="stock.code"
          v-wave="{color: '#404040'}" 
          v-for="stock in stocks"
          class="stock" 
        >
          <div class="name">
            <h3>{{ stock.code }}</h3>
            <p>{{ stock.name }}</p>
          </div>
          <div class="price">
            <h3>{{ stock.price | BRL }}</h3>
          </div>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  computed: {
    stocks() {
      return _.orderBy(this.$store.getters.stocks, 'code')
    }
  }
}
</script>

<style lang="scss" scoped> @import "@/styles/list-stock.scss"; </style>