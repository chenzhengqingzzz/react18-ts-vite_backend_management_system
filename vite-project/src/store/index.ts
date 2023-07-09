/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-08 18:21:52
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-09 16:34:35
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/index.ts
 * @Description: react数据流的总仓库
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { combineReducers, legacy_createStore } from "redux";
import numReducer from './numStore/reducer';
import arrReducer from './arrStore/reducer';

// 组合各个模块的reducer
const reducers = combineReducers({
      numReducer,
      arrReducer
})

// 创建仓库
// 加第二个参数是为了让浏览器正常使用devtools插件
const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
