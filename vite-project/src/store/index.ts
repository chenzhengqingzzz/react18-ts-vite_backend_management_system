/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-08 18:21:52
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 19:14:02
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/store/index.ts
 * @Description: react数据流的总仓库
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { combineReducers, legacy_createStore, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import numReducer from './numStore/reducer';
import arrReducer from './arrStore/reducer';

// 组合各个模块的reducer
const reducers = combineReducers({
      numReducer,
      arrReducer
})

// 创建仓库
// 加第二个参数是为了让浏览器正常使用devtools插件
// const store = legacy_createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
// 总的来说就是让redux开发者工具支持异步
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
export default store;
