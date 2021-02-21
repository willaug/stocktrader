import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stocktrader-b4ecf-default-rtdb.firebaseio.com/'
        })
    }
})