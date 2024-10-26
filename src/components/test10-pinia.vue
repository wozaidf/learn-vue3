<template>
    <div class="count">
        <h2> 当前求和：{{ sum }}</h2>
        <h2> 学校：{{ school }}</h2>
        <h2> 地址：{{ address }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="count">
import { ref, reactive, toRefs } from 'vue'
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';

// 获取pinia状态库中的count数据，countStore是一个proxy对象（用reactive定义的对象）
const countStore = useCountStore()

// 以下两种方法都可以获取state中的数据
// console.log(countStore.sum);   // sum在countStore中是ref定义的数据，但这边取出sum值不需要使用.value（直接写sum），因为在reactive中定义的ref数据，reactive会自动将该数据解包
// console.log(countStore.$state.sum);

// console.log(countStore);

const { sum, school, address, bigSum } = storeToRefs(countStore) // storeToRefs是用于将pinia中的数据结构出来进行响应式

// 取出getters中的数据
// console.log(countStore.bigSum);

let n = ref(0)  // 用户选择的数据

function add() {
    // 第一种修改方式：可以直接修改仓库中的数据
    countStore.sum += n.value
    countStore.school = "江苏大学"
    countStore.address = "镇江"

    // 第二修改方式：用于修改多个数据(批量变更数据)
    countStore.$patch({
        sum: 9,
        school: "南京大学",
        address: "南京市"
    })

    // 第三种修改方式(actiopns:动作)：通过在仓库中写特定方法来修改数据,然后再调用该方法来达成目的
    countStore.increament(n.value)
}
function minus() {
    countStore.sum -= n.value
}


</script>

<style scoped>
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