// 引入定义仓库的函数
import { defineStore } from 'pinia'

// 暴露仓库
export const useCountStore = defineStore('count', { // count是相当于该仓库的id
    // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions: {
        increament(value: number) { //自定义的方法(动作),给予组件中特定动作.并且可以携带参数进行交互
            // 修改数据和,this是指向当前的state对象的,用于取出state中的数据
            this.sum += value
            // actions真正的用处在于复用数据处理过程
            // 比如说要提交一个订单,多个页面要提交多次,有了这方法就可以复用了
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: "南京信息工程大学",
            address: "南京市浦口区"
        }
    },
    getters: {
        bigSum(state) { // 参数式state对象
            // console.log(this)
            // 通过state参数和this都能取到sum值（两种写法）
            // return this.sum * 10
            return state.sum * 10
        },

        // 箭头函数写法
        bigSum1: state => state.sum * 10,

        upToschool(): string {   // ts写法
            return this.school += 1
        }
    }
})