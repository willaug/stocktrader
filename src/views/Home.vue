<template>
  <div>
    <h1 class="title-1 sp-4">Comece por aqui:</h1>
    <div class="grid">
      <router-link to="/portfolio" class="card" v-wave="{color: '#404040'}">  
        <svg height="512pt" viewBox="0 -56 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m497 70h-60c-8.285156 0-15 6.714844-15 15v300c0 8.285156 6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15v-300c0-8.285156-6.714844-15-15-15zm0 0"/><path d="m215.667969 151h-15v-45c0-8.285156-6.71875-15-15-15-8.285157 0-15 6.714844-15 15v45h-15c-8.285157 0-15 6.714844-15 15v200c0 8.285156 6.714843 15 15 15h60c8.28125 0 15-6.714844 15-15v-200c0-8.285156-6.71875-15-15-15zm0 0"/><path d="m356.332031 60h-15v-45c0-8.285156-6.714843-15-15-15-8.28125 0-15 6.714844-15 15v45h-15c-8.28125 0-15 6.714844-15 15v60c0 8.285156 6.71875 15 15 15h15v45c0 8.285156 6.71875 15 15 15 8.285157 0 15-6.714844 15-15v-45h15c8.285157 0 15-6.714844 15-15v-60c0-8.285156-6.714843-15-15-15zm0 0"/><path d="m75 20h-60c-8.285156 0-15 6.714844-15 15v200c0 8.285156 6.714844 15 15 15h15v105c0 8.285156 6.714844 15 15 15s15-6.714844 15-15v-105h15c8.285156 0 15-6.714844 15-15v-200c0-8.285156-6.714844-15-15-15zm0 0"/></svg>
        <div class="card-text">
          <h2 class="title-2 raleway sp-4">Portfólio</h2>
          <p class="description lato sp-4">Consulte suas ações</p>
        </div>
      </router-link>
      <router-link to="/stocks" class="card" v-wave="{color: '#404040'}">
        <svg height="459pt" viewBox="-5 0 459 459.648" width="459pt" xmlns="http://www.w3.org/2000/svg"><path d="m416.324219 293.824219c0 26.507812-21.492188 48-48 48h-313.375l63.199219-63.199219-22.625-22.625-90.511719 90.511719c-6.246094 6.25-6.246094 16.375 0 22.625l90.511719 90.511719 22.625-22.625-63.199219-63.199219h313.375c44.160156-.054688 79.945312-35.839844 80-80v-64h-32zm0 0"/><path d="m32.324219 165.824219c0-26.511719 21.488281-48 48-48h313.375l-63.199219 63.199219 22.625 22.625 90.511719-90.511719c6.246093-6.25 6.246093-16.375 0-22.625l-90.511719-90.511719-22.625 22.625 63.199219 63.199219h-313.375c-44.160157.050781-79.949219 35.839843-80 80v64h32zm0 0"/></svg>
        <div class="card-text">
          <h2 class="title-2 raleway sp-4">Negociar</h2>
          <p class="description lato sp-4">Compre ações</p>
        </div>
      </router-link>
    </div>
    <disclaimer/>
  </div>
</template>

<script>
import Disclaimer from '../components/Disclaimer'

export default {
  components: { Disclaimer }
}
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  .grid{
      width: 100%;
      display: grid;
      grid-row-gap: 35px;
      grid-template-columns: repeat(1, 100%);
  }

  .card{
      width: 100%;
      display: flex;
      height: 120px;
      position: relative;
      border-radius: 20px;
      background-color: $c2;
      align-items: center;

      svg{
          fill: $c4;
          width: 60px;
          height: auto;
          position: relative;
          margin-left: 30px;
      }

      .card-text{
          margin-left: 30px;
          width: calc(100% - 150px);
          position: relative;
      }
  }

  @media(min-width: 700px) {
    .card{
      height: 140px;

      svg{
        width: 80px;
        margin-left: 40px;
      }

      .card-text{
        margin-left: 40px
      }
    }
  }

  @media(min-width: 1024px) {
    .grid{
      width: 100%;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(2, calc( 50% - 15px));
    }
  }
</style>