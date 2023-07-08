/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-08 20:47:53
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/main.tsx
 * @Description: 整个项目的入口文件
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
// 全局引入reset-css 样式初始化一般放在最前
import "reset-css";
// UI框架的样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// 全局样式
import "@/assets/styles/global.scss";

// 组件的样式

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import Router from '@/router';
// 状态管理（数据流）
import { Provider } from 'react-redux'
import store from '@/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);
