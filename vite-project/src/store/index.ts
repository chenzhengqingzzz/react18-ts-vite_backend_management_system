/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-08 18:21:52
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-09 12:17:05
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/index.ts
 * @Description: react数据流的总仓库
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { legacy_createStore } from "redux";
import reducer from "./reducer";

// 创建仓库
// 加第二个参数是为了让浏览器正常使用devtools插件
const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
