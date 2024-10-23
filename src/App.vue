<template>
    <div class="app">
        <count />
        <love />
    </div>
</template>

<script lang="ts" setup name="App">
import count from './components/test10-pinia.vue'
import love from './components/test11-pinia.vue'


</script>

<style>
/* 样式 */
.app {
    background-color: aqua;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    height: 900px;
}
</style>
