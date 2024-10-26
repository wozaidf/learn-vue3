<template>
    <div class="talk">
        <button @click="getLove">获取一个土味情话</button>
        <ul>
            <li v-for="t in talkList" :key="t.id">
                {{ t.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="love">
// 引入状态管理器中的仓库函数，该函数返回一个对象，这个对象是用来描述仓库的一些信息（包括id）和存储的数据
import { useLoveTalk } from '@/store/loveTalk'
import { storeToRefs } from 'pinia';
let talkStore = useLoveTalk()     // 取出存储在pinia中的仓库对象数据
const { talkList } = storeToRefs(talkStore)

// 检测talkStore数据的变化，在仓库对象身上点出监视方法
talkStore.$subscribe((mutate, state) => { // mutate式本次修改的信息，还可以收到state中的数据
    console.log("talkStore的数据发生改变");
    console.log(mutate); // 打印本次修改的信息
    // 可以将修改的数据进行localStorage中保存，实现刷新不丢失，loaclStorage中只能存json字符串，需要将数据转化为json字符串
    localStorage.setItem('loveTalk',JSON.stringify(state.talkList))
})


function getLove() {
    talkStore.getAtalk()

}
</script>

<style scoped>
.talk {
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