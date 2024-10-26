// 引入createApp用于创建应用 （制造花盆）
import { createApp } from "vue";
// 引入App根组件 （拿花根）
import App from "./App.vue";

// 引入路由器
import router from '@/router/index'

// 创建根组件并挂在入口文件 （将花根植入花盆并且放在阳台（位置））
const app = createApp(App)

// 第一步引入pinia
import { createPinia } from 'pinia'

// 第二步：创建pinia
const pinia = createPinia()

// 第三步：安装pinia
app.use(pinia)

// 使用路由
app.use(router)

app.mount('#app')

