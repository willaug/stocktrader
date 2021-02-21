<template>
  <div class="wallet"><i class="fas fa-wallet"></i> {{ fundsMobile | BRL }}</div>
</template>

<script>
export default {
    computed: {
        fundsMobile() { return this.$store.getters.funds }
    }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

.wallet{
    position: relative;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    border-radius: 13px;
    color: $lc2;
    padding-left: 20px;
    background: $c2;
    display: flex;
    font-size: 21px;
    line-height: 50px;
    margin-bottom: 40px;
    max-width: 400px;
    left: 50%;
    transform: translateX(-50%);
    user-select: none;

    .fas{
        margin-right: 10px;
        line-height: 50px;
    }
}

@media(min-width: 1024px){
    .wallet{
        display: none;
    }
}

</style>