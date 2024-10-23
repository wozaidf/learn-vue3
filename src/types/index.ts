// test6
// Ts的使用
// 定义的一个接口，用于限制person对象的具体属性
// 暴露方法：1、默认暴露，2、分别暴露，统一暴露

// 分别暴露
// 暴露一个名叫PersonInter的对象类型规范
// interface(接口) 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
export interface PersonInter {
    id: string,
    name: string,
    age: number
}

// 自定义类型规范（自定义PersonInter数组规范）
export type Persons = Array<PersonInter>
// export type Persons = PersonInter[] 第二种简单写法



export interface newsInter {
    id: string,
    title: string,
    content: string
}

export type newsList = Array<newsInter>