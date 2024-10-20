// 引入createApp用于创建应用 （制造花盆）
import { createApp } from "vue"; 
// 引入App根组件 （拿花根）
import App from "./App.vue";
// 创建根组件并挂在入口文件 （将花根植入花盆并且放在阳台（位置））
createApp(App).mount('#app')
