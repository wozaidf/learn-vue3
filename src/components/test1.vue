<template>
    <div>
        姓：<input type="text" v-model="fistname"><br />
        名：<input type="text" v-model="lastname"><br>
        全名：<span>{{ fullName }}</span>
        <button @click="changeFullName">改变名字</button>
    </div>
</template>

<script lang="ts" setup name="test1">
import { computed, ref } from 'vue';
let fistname = ref("liu")
let lastname = ref("kai")
// vue3计算属性(计算属性有缓存，属性一样时只调用一次，而方法则是用几次调用几次)
let fullName = computed({
    get() {
        return fistname.value.slice(0, 1).toUpperCase() + fistname.value.slice(1) + lastname.value
    },
    set(val) { // 什么时候改fullName什么时候调用
        console.log(val);
        let [str1, str2] = val.split('-') // js字符串用“-”分割，返回数组，并解构
        fistname.value = str1
        lastname.value = str2
    }
})

function changeFullName() {
    fullName.value = "li-si"
}
 
</script>

<style></style>