/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-09 12:51:57
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-09 16:27:29
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/arrStore/index.ts
 * @Description: 属于testArr的小仓库
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
export default {
    state: {
        testArr: [10, 20, 30]
    },

    actions: {
        testArrPush(state: {testArr: number[]}, action: {type: string, data: number}){
            state.testArr.push(action.data)
        }
    },

    // 统一管理type
    testArrPush: 'testArrPush'
}