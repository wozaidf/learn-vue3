// 对标test8
import { reactive, onMounted } from 'vue'
import axios from 'axios'

// 默认暴露函数
export default function () {
    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_1823.jpg'
    ])

    // 方法
    // function getDog() {
    //     axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(function (response){
    //         dogList.push(response.data.message)
    //         console.log(dogList);
    //         console.log(response);
    //     })
    // }

    // 语法糖写法
    async function getDog() {
        try {
            let result = await axios({
                method: 'get',
                url: 'https://dog.ceo/api/breed/pembroke/images/random'
            })
            let dogs = result.data.message
            dogList.push(dogs)
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }

    // 在hooks中写钩子，在加载完成之后立即获取一只狗
    onMounted(() => {
        getDog()
    })

    // 向外部提供dogList数据和getDog方法
    return {
        dogList, getDog
    }
}