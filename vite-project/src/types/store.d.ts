/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-09 12:09:38
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 19:16:17
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/types/store.d.ts
 * @Description: 声明store中的属性类型，解决vscode爆红的问题
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */


// 【重点】d.ts 文件仅在没有任何导入时才被视为环境模块声明.如果您提供了一个导入行，它现在被视为
// 一个普通的模块文件，而不是全局文件！！！

declare type RootState = ReturnType<typeof import('@/store').getState>;

declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function
}
