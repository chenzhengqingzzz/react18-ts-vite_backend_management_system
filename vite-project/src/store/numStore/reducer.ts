/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-09 16:10:04
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-09 16:23:05
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/numStore/reducer.ts
 * @Description: 属于num属性的reducer
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import numStore from "./index";
// 初始化state
const defautState = {
    // es6展开式
    ...numStore.state,
}

/**
 * @description: 用来加工状态的reducer
 * @param {Object} state 存放数据的state
 * @param {Object} action dispatch传的包含type、data的对象
 * @return {Object}
 */
let reducer = (state = defautState, action: {type: string, data: number}) => {
     
    // 组件中的dispatch一调用就会执行这里的代码
    switch (action.type) {
        // 这里的条件的type是组件中的action规定的 和actions无关（actions是包含所有action的对象）
        case numStore.increment:
            numStore.actions.increment(state, action)
            break;
    
        default:
            break;
    }
    
    // 通过使用深拷贝，可以确保返回的状态是一个全新的对象
    return JSON.parse(JSON.stringify(state))
}

export default reducer