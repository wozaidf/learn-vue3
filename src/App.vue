<template>
    <div class="app">
        <!-- 没有向子组件传入list -->
        <test6 a="哈哈哈" b="嘿嘿"  /> 
    </div>
</template>

<script lang="ts" setup name="App">
import test6 from './components/test6.vue'
// 引入PersonInter的时候会标红区用于区别值，PersonInter是规范是类型（ts中的作用是1、规范数据类型。2、防止定义实例对象时候，出现key和值的类型不一致。3、防止对象的key写错）
import { type PersonInter, type Persons } from "@/types/index"
import { reactive } from "vue";

// 定义一个数组，并且数组中的每一个项符合PersonInter规范
let personList = reactive<Persons>([
    { id: "adsad1231", name: "周芸", age: 21 },
    { id: "asda123dd", name: "刘宇", age: 13 },
    { id: "dasdasfasd", name: "删号", age: 12 }
])
</script>

<style>
/* 样式 */
.app {
    background-color: aqua;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
