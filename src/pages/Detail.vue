<template>
    <div>
        <ul>
            <li>
                {{ id }}
            </li>
            <li>
                {{ title }}
            </li>
            <li>
                {{ content }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="detail">

// 引入route使用器
import { toRefs,  } from 'vue';
import { useRoute } from 'vue-router';
// let route = useRoute()
// let { params } = toRefs(route)

defineProps(['id','title','content'])


</script>

<style></style>