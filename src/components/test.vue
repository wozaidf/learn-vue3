<template>
    <div>
        <h3>车是{{ brand }}</h3>
        <h3>价格是{{ price }}</h3>
        <button @click="changeCar">改变车</button>
    </div>
</template>

<script lang="ts" setup name="test">
import { reactive, toRef, toRefs } from 'vue';
let car = reactive({ brand: "宝马", price: 3211 })

// 要想解构出来对象的属性（不能直接结构，直接结构出来的属性不是响应式的）
// 需要使用Torefs方法将一个响应式对象中的每一个属性，转换为`ref`对象。
let { brand, price } = toRefs(car)
let name = toRef(car,'brand') // 从car'中单独提取brnad给name，并赋予响应式能力
console.log(name);

function changeCar() {
    brand.value = "保时捷"
}
</script>

<style></style>