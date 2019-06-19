import "../css/main.css"
import "../css/one.less"
import "../css/one.scss"
import "vant/lib/index.css"
import "bootstrap/dist/css/bootstrap.css"
import Vue from "vue"
import VueRouter from "vue-router"
import main from "../vue/main.vue"
import router from "./route.js"
// import Vant from "vant"

console.log(111);
Vue.use(VueRouter);
// Vue.use(Vant)

var vm = new Vue({
    el:"#myApp",
    data:{
        test:123
    },
    methods:{},
    render:c => c(main),
    router

})