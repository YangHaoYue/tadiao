import Vue from 'vue'
import App from './App'

import home from './pages/home/home.vue'
Vue.component('home',home)

import leader from './pages/leader/leader.vue'
Vue.component('leader',leader)

import mine from './pages/mine/mine.vue'
Vue.component('mine',mine)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import equipmentItem from "@/components/equipment-item.vue"
Vue.component('equipmentItem',equipmentItem)

import http from './common/httpRequest'
Vue.prototype.http = http

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
