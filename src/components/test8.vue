<template>
    <div>
        <h2>当前求和为{{ sum }}，放大50倍后为{{ bigSum }}</h2>
        <button @click="add"> 点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="无法加载" title="柯基吧">
        <hr>
        <button @click="getDog">再来一只</button>
    </div>
</template>

<script lang="ts" setup name="">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

// 通过结构将数据结构出来使用
const { dogList, getDog } = useDog()
const { sum, add, bigSum } = useSum()
</script>

<style>
img {
    height: 100px;
    margin-left: 10px;
}
</style>