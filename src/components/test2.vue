<template>
    <div>
        <h1>姓名：{{ person.name }}</h1>
        <h1>年龄：{{ person.age }}</h1>
        <button @click="changName">改变名字</button>
        <button @click="changAge">改变年龄</button>
        <button @click="changPerson">改变人</button>
    </div>
</template>

<script lang="ts" setup name="test2">
import { ref, watch,reactive } from 'vue';
// 数据
let person = reactive({
    name: '刘凯',
    age: 19
})
// 方法
function changName() {
    person.name += "~"
}
function changAge() {
    person.age += 1
}
function changPerson() {
    Object.assign(person,{ name: "周芸", age: 23,gender:"女" }) // 这里对象的地址值并没有发生改变
}

// 监视reactive定义的对象数据类型，且默认开启深度监视（只要对象的属性有变化就启用监视）
watch(person, (newV, oldV) => {
    console.log(newV, oldV);
})

</script>

<style></style>