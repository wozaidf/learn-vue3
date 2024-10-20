<template>
    <div>
        <h1>姓名：{{ person.name }}</h1>
        <h1>年龄：{{ person.age }}</h1>
        <h1>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h1>
        <button @click="changeName">改变名字</button>
        <button @click="changeAge">改变年龄</button>
        <button @click="changeC1">改变c1</button>
        <button @click="changeC2">改变c2</button>
        <button @click="changeCar">改变车</button>
    </div>
</template>

<!--  监视对象中的某个属性（并非整个对象） -->
<script lang="ts" setup name="test3">
import { reactive, ref, watch } from 'vue';

// 数据
let person = reactive({
    name: "刘凯",
    age: 18,
    car: {
        c1: "宝马", c2: "奔驰"
    }
})

let family = ref("周芸")

// 方法
function changeName() {
    person.name += "~"
}
function changeAge() {
    person.age += 1
}
function changeC1() {
    person.car.c1 = "su7"
}
function changeC2() {
    person.car.c2 = "保时捷"
}
function changeCar() {
    // 并非是修改整个对象，而是修改对象中的对象属性，所以不需要使用
    person.car = { c1: "奥迪", c2: "丰田" }
}

// // 因为watch只接受四种参数（没有被reactive定义的对象的属性这种参数，所以只能用函数返回值来代替）,同时这里的newV和oldV不会出错，会更精确
// watch(() => { return person.name }, (newV, oldV) => {
//     console.log(newV, oldV);
// })

// watch(() => person.car, (newV, oldV) => {
//     console.log(newV, oldV);
// }, { deep: true })

// 情况五：监视多种数据类型
watch([() => person.name, () => person.car.c1], (newV, oldV) => {
    console.log("新值", newV);
    console.log("旧值", oldV);
})

</script>

<style></style>