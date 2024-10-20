<template>
    <div>
        <h1>需要水位达到8cm或者水温达到60度给服务器发生请求</h1>
        <h1>当前水温：{{ temp }}</h1>
        <h1>当前水位：{{ height }}</h1>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

// watchEffect
<script lang="ts" setup name="">
import { ref, watch, watchEffect } from 'vue';

let temp = ref(10)
function changeTemp() {
    temp.value += 10
}

let height = ref(10)
function changeHeight() {
    height.value += 10

}
// watch 需要明确指定要监视谁
// watch([temp, height], (value) => {
//     let [newTemp, newHeight] = value
//     if (newTemp >= 60 || newHeight >= 80) {
//         console.log("发生请求");
//     }
// })

// watchEffect一上来先执行，自动监视数据，函数中要用到哪些属性，就监视哪些属性
watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
        console.log("发送请求");
    }
})
</script>

<style></style>