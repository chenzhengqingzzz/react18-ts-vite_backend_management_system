/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-09 11:12:00
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 20:01:18
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/numStore/index.ts
 * @Description: 属于num的小仓库
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

export default {
    state: {
        num: 20
    },
    actions: {
        // actions里面提交reducer需要处理的函数
        increment(state: {num: number}, action: {type: string, data: number}){
            state.num += action.data
        },
        incrementAsync(state: {num: number}, action: {type: string, data: number}){
            // setTimeout(() => {
                state.num += action.data
            // }, 1000);
        }
    },
}