<template>
    <div>
        <h1>{{ sum }}</h1>
        <button @click="addSum">点击+1</button>
    </div>
</template>

// vue3生命周期
<script lang="ts" setup name="test7">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref,onBeforeUnmount,onUnmounted } from 'vue';
let sum = ref(0)
function addSum() {
    sum.value += 1
}

// 创建
console.log("创建");

// 挂载前
onBeforeMount(()=>{
    console.log("挂载前");
    // debugger
})

// 挂载完毕
onMounted(()=>{
    console.log("子-挂载完毕");
})

// 更新前
onBeforeUpdate(()=>{
    console.log("更新前");
})

// 更新完毕
onUpdated(()=>{
    console.log("更新完毕");
})

// 卸载前
onBeforeUnmount(()=>{
    console.log("卸载前");
})

// 卸载完毕
onUnmounted(()=>{
    console.log("卸载完毕");
})

</script>

<style></style>