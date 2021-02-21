<template>
    <div>
        <a class="credits" href="https://github.com/willaug" target="_blank">Feito com <strong><i class="fas fa-heart"></i></strong> por William Augusto</a>
        <p class="disclaimer">Todas as informações apresentadas são fictícias e não representam a verdade.</p>
    </div>
</template>

<style scoped>
.credits{
    font-size: 15px;
    margin-top: 70px;
    text-align: center;
    color: #414143;
    letter-spacing: 0.4px;
    text-decoration: none;
    display: block
}

strong{
    color: #46CEAD
}

.disclaimer{
    position: relative;
    text-align: center;  
    font-size: 11px;
    color: #3c3c3d;
    margin: 22px 0px 10px 0px
}

@media (min-width: 700px) {
    .credits{
        font-size: 17px;
        margin-top: 220px;
    }
    .disclaimer{
        margin-top: 10px;
        font-size: 14px;
    }
}
</style>