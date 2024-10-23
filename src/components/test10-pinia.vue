<template>
    <div class="count">
        <h2> 当前求和：{{ sum }}</h2>
        <select v-model="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="count">
import { ref } from 'vue'
let sum = ref(0)  // 当前求和
let n = ref(0)  // 用户选择的数据

function add() {
    sum.value += 1
}

function minus() {
    sum.value += n.value
}


</script>

<style>
.count {
    background-color: blueviolet;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25%;
}
</style>