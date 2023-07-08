/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-08 18:21:52
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-08 18:41:53
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/index.ts
 * @Description: react数据流的总仓库
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { legacy_createStore } from 'redux'
import reducer from './reducer';

// 创建仓库
const store = legacy_createStore(reducer)

export default store