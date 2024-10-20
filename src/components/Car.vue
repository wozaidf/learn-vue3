<template>
    <div>
        <h1>一辆{{ car.brand }}</h1>
        <h1>价格为：{{ car.price }}</h1>
        <button @click="changeCarPrice">修改价格</button>
    </div>
    <div>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
            <ul>
                <li>12</li>
                <li>3</li>
                <li>121</li>
            </ul>
            <h2>2000</h2>
            <button @click="changeGameName">修改游戏名字</button>
            <button @click="changeGames">修改游戏</button>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Car">
import { reactive, ref } from 'vue';

// 汽车信息
let car = ref({ brand: '奔驰', price: 3000 })
console.log(car);

function changeCarPrice() {
    car.value.price = 9000  // 对比ref不需要使用value
}


// 游戏信息
let games = reactive([
    { id: 'game1', name: '炉石传说' },
    { id: 'game2', name: 'csgo' },
    { id: 'game3', name: 'cf' },
])
console.log(games);

function changeGameName() {
    games[0].name = "原生"
}
function changeGames() {
    // 直接将games改成另一个新的数组对象，不会变成响应式
    // games = [{ id: 'game4', name: '逆战' }, { id: 'game9', name: '传奇' }]
    // 要使用assign方法,将games的数据覆盖，并不是新的数据对象
    Object.assign(games,[{ id: 'game4', name: '逆战' }, { id: 'game9', name: '传奇' }])
}



</script>

<style></style>