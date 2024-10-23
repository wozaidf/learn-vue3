// 创建一个路由器router并暴露出去

// 第一步：引入craeteRouter和路由工作模式
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'

// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),   // history模式
    routes: [
        {
            name: 'zhuyu',
            path: '/home',
            component: Home
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail',  // 子路由没有 '/'  content可以传可以不传  
                    component: () => import('@/pages/Detail.vue'),   // 路由懒加载写法（使用该组件时再加载）
                    // 第一种写法：将路由收到的params参数作为props传给路由组件
                    // props: true

                    // 第二种写法(函数写法)：可以自己决定将什么作为props给路由组件(可以使用query或者params路由传参)
                    props(route) {
                        // console.log(route); // props函数带来的参数就是route对象
                        return route.query
                    }
                }
            ]
        },
        {
            path: '/',   // 重定向到about界面
            redirect: '/about'
        }
    ]
})

export default router

