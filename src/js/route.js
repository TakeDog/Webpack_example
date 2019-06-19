import VueRouter from "vue-router"
import register from "../vue/register.vue"
import login from "../vue/login.vue"
import one from "../vue/login_one.vue"
import two from "../vue/login_two.vue"

var router = new VueRouter({
    routes:[
        {
            path:"/login",
            component:login,
            children:[
                {path:"one",component:one},
                {path:"two",component:two}
            ]
        },
        {path:"/register",component:register}
    ]
})
 
export default router