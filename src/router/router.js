import {createRouter,createWebHashHistory} from 'vue-router'
import NProgress from "@/config/nprogress.js";

const routes = [
    {
        path: '/',
        name: 'login',
        meta : {
            title : '登录',
        },

        component : ()=> import("@/views/login/login.vue")
    },
    {
        path: '/home',
        name: 'home',
        meta : {
            title : '布局',
        },

        component : ()=> import("@/views/layout/layout.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

router.beforeEach(async (to,from,next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
  NProgress.done()
})

router.onError(error => {
    NProgress.done()
    console.log("路由错误",error.message)
})

export default router