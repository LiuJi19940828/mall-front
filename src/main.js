import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import VChars from 'v-charts'
// import {VeLine} from 'v-charts/lib/line'
import 'v-charts/lib/style.css'


Vue.use(elementUI);
Vue.use(VChars)

// Vue.component(VeLine.name, VeLine);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router
}).$mount("#app")
