<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>性别:{{ gender }}</h2>
        <h2>电话：{{ phone }}</h2>
        <!-- <h2>你的名字是{{ uName }}</h2> -->
        <button @click="showAddress">查看地址</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">增加年龄</button>
    </div>
</template>

// 组合式
<!-- <script lang="ts">
export default {
    name: 'person',
    data() {
        return {
            name:'张三',
            phone:15312842002,
            gender:'男',
            age:18,
            address:"江苏省扬州市"
        }
    },
    methods:{
        showAddress(){
            alert(this.address)
        },
        changeName(){
            this.name = "刘凯"
        },
        changeAge(){
            this.age++
        }
    }
}
</script> -->

<!-- <script lang="ts">
export default {
    name: 'person',
    setup() {   // 没有this
        // 数据(此时这些数据不是响应式的)
        let name = "刘凯威"
        let age = 18
        let phone = 15312842002
        let gender = "男"

        // 方法
        function changeName() {
            name = "周云" // name修改了，但不是响应式的
        }
        function changeAge() {
            age++
        }
        function showAddress() {
            alert(phone)
        }

        // 返回数据
        return {
            name, age, changeName, changeAge, showAddress
        }

        // setup返回值也可以是渲染函数
        // return ()=> '哈哈'
    },
    // data(){
    //     return{
    //         uName:this.name
    //     }
    // }
}
</script> -->

// 这段代码可以用setup的插件替换写成下面的name（仅在开发中使用）
<!-- <script lang="ts">
export default {
    name: 'person12'
}
</script> -->

<script lang="ts" setup name="person1231">
import { ref } from 'vue';
let name = ref('汤亚诗')
let age = 18
let phone = 15312842002
let gender = "男"
console.log(name);


// 方法
function changeName() {
    name.value = "周芸" // name修改了，但不是响应式的
}
function changeAge() {
    age++
}
function showAddress() {
    alert(phone)
}
</script>


<style>
button {
    margin: 0 5px;
}
</style>