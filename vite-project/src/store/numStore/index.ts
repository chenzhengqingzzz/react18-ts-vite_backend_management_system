/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-09 11:12:00
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 20:56:00
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/numStore/index.ts
 * @Description: 属于num的小仓库
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

export default {
    state: {
        num: 20
    },
    actions: { //只放同步的方法
        // actions里面提交reducer需要处理的函数
        increment(state: {num: number}, action: {type: string, data: number}){
            state.num += action.data
        },
    },

    // 优化redux-thunk的异步写法（模仿Vuex的写法）
    asyncActions: {
        // 这里的形参dispatch是redux-thunk里面规定的函数
        incrementAsync(dispatch: Function){
            setTimeout(() => {
                // 这里的dispatch是提交给store处理的对象
                dispatch({type: 'increment', data: 1})
            }, 1000);
        }
    }
}