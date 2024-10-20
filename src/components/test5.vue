<template>
    <div>
        <h1>中国</h1>
        <h3>扬州</h3>
    </div>
</template>

<script lang="ts" setup name="">
import { reactive, ref, defineExpose } from "vue"
let a = ref(123)
let car = reactive({ brand: "宝马", price: 123123 })

// 向父组件暴露自己的指定数据
defineExpose({ a, car })

</script>

<style></style>