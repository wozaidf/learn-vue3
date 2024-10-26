import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid' // 引入随机生成字符串id

// 暴露仓库 选项式写法
export const useLoveTalk = defineStore('loveTalk', {
    actions: {
        async getAtalk() {
            try {
                // 发请求
                let result = await axios({
                    method: 'get',
                    url: 'https://api.uomg.com/api/rand.qinghua?format=json'
                })

                // 处理数据
                let love = result.data.content
                // 包装love对象
                let talkObj = { id: nanoid(), title: love }
                // 将love对象添加到情话数组中
                this.talkList.unshift(talkObj)
            } catch (error) {
                alert(error)
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            // talkList: [
            //     {
            //         id: '001',
            //         title: '你是我的土豆，又土又逗。'
            //     },
            //     {
            //         id: '002',
            //         title: '我喜欢你，像风走了八百里，不问归期。'
            //     },
            //     {
            //         id: '003',
            //         title: '你是我的巧克力，我是你的巧克力夹心。'
            //     },
            //     {
            //         id: '004',
            //         title: '我想变成你的猫，慵懒的躺在你怀里，打个滚，蹭蹭你。'
            //     },
            // ]
            talkList: JSON.parse(localStorage.getItem('loveTalk') as string) || []  // 如果localStorage式空的话就默认是空数组
        }
    }
})

// 暴露仓库  组合式写法（相似于setup写法）
// export const useLoveTalk = defineStore('loveTalk', () => {
//     // state数据
//     const talkList = JSON.parse(localStorage.getItem('loveTlk') as string)

//     // actions方法
//     async function getAtalk() {
//         try {
//             // 发请求
//             let result = await axios({
//                 method: 'get',
//                 url: 'https://api.uomg.com/api/rand.qinghua?format=json'
//             })

//             // 处理数据
//             let love = result.data.content
//             // 包装love对象
//             let talkObj = { id: nanoid(), title: love }
//             // 将love对象添加到情话数组中
//             talkList.unshift(talkObj)
//         } catch (error) {
//             alert(error)
//         }
//     }

//     return {
//         getAtalk, talkList
//     }
// })