<template>
    <div style="height: 900px;">
        <h1>新闻界面</h1>
        <div class="news-content">
            <ul>
                <li v-for="n in news" :key="n.id">
                    <!-- <RouterLink :to='`/news/detail?id=${n.id}&title=${n.title}`' href="#">
                        {{ n.title }}
                    </RouterLink> -->
                    <!-- <RouterLink :to="{
                        path: '/news/detail',
                        query: {
                            id: n.id,
                            title: n.title,
                            content: n.content
                        }
                    }" href="#">
                        {{ n.title }}
                    </RouterLink> -->


                    <!-- <RouterLink :to="`/news/detail/${n.id}/${n.title}/${n.content}`" href="#">
                        {{ n.title }}
                    </RouterLink> -->


                    <!-- <RouterLink :to="{
                        name: 'xiang',   // 注意这里params只能写name来标识路由
                        params: {
                            id: n.id,
                            title: n.title,
                            content: n.content
                        }
                    }
                        " href="#">
                        {{ n.title }}
                    </RouterLink> -->


                    <!-- 编程式实现路由跳转和传参 -->
                    <button @click="showNewsDetail(n)">查看详情</button>
                    <!--  RouterLink 实现路由跳转和传参 -->
                    <RouterLink :to="{
                        name: 'xiang',
                        query: {
                            id: n.id,
                            title: n.title,
                            content: n.content
                        }
                    }
                        " href="#">
                        {{ n.title }}
                    </RouterLink>
                </li>
            </ul>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { type newsList, type newsInter } from '../types/index'

const router = useRouter()

function showNewsDetail(n: newsInter) { // 这里参数传过来ts不知道啥类型，所以要用类型标识一下
    router.push({      // push中可以写字符串和对象写法（和to的写法一样）
        path: '/news/detail',
        query: {
            id: n.id,
            title: n.title,
            content: n.content
        }
    })
}
// 使用泛型的两种方法
// let news = reactive<newsList>([])

let news: newsList = reactive([
    {
        id: 'asdasda',
        title: '很好的食物',
        content: '西兰花'
    },
    {
        id: 'dasdaad',
        title: '如何一夜暴富',
        content: '买彩票'
    },
    {
        id: 'awdasda',
        title: '她说带了不算给',
        content: '阿米奴斯哦'
    },
    {
        id: 'awdasdasdv',
        title: '震惊长安第一拳',
        content: '万豪'
    },
])
</script>

<style>
.news-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    height: 800px;
}

.news-content li::marker {
    color: blueviolet
}
</style>