<template>
  <div id="app">
    <!-- navbar -->
    <navbar/>
    <!-- principal content -->
    <div class="content w-300">
      <transition name="slide" appear mode="out-in" class="w-300">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar' 

export default {
  name: 'app',
  components: { Navbar },
  created() {
    this.$store.dispatch('initStocks')
    this.$store.dispatch('loadData')
  }
}
</script>

<style scoped>
  @keyframes slide-in {
    from { transform: translateY(-25px); }
    to { transform: translateY(0); }
  }

  @keyframes slide-out {
    from { transform: translateY(0); }
    to { transform: translateY(-25px); }
  }

  .slide-enter-active {
    animation: slide-in .8s ease;
    transition: opacity .8s;
  }

  .slide-leave-active {
    animation: slide-out .8s ease;
    transition: opacity .8s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>