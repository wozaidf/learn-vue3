<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="test6">
import type { Persons } from '@/types';
import {withDefaults}  from 'vue';


// 接受a，仅在html中使用
// defineProps(['a', 'b'])

// 接受a,b，list 同时将props保存起来
// let fatherData = defineProps(['a', 'b', 'list'])

// 接受list + 限制类型(<>是泛型的标识)
// defineProps<{ list: Persons }>()

// 接受list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => [{ id: 'wdqwd', name: '刘凯', age: 23 }] // 这要写成返回值形式
})
</script>

<style></style>