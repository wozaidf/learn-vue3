<template>
    <div>
        <h2>vue路由测试</h2>
        <!-- 导航 -->
        <div class="navigate">
            <RouterLink replace :to="{ path: '/home' }" class="active">首页</RouterLink>
            <RouterLink replace :to="{ name: 'xinwen' }">新闻</RouterLink>
            <RouterLink replace to="/about">关于</RouterLink>
        </div>
        <div class="main-content">
            <!-- 路由展示区 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="test9">
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter()


</script>

<style>
.navigate {
    a {
        margin-left: 10px;
    }

}

.main-content {
    border: 2px solid black;
    height: 700px;
    width: 1200px;
    margin-top: 50px;
}
</style>