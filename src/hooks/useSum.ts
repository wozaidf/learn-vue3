import { computed, ref } from 'vue'

export default function () {
    // 数据
    let sum = ref(0)
    
    // 在hooks中写计算属性
    let bigSum = computed(() => {
        return sum.value * 50
    })

    // 方法
    function add() {
        sum.value += 1
    }

    // 向外部提供sum数据和add方法
    return { sum, add, bigSum }
}