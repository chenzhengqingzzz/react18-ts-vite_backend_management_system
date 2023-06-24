/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-24 20:13:33
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-24 21:14:39
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/router/index.tsx
 * @Description: 路由器
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

// 使用懒加载
import React, { lazy } from "react";
// 由于我们规定Home组件一上来就能看到 给它做懒加载的意义不大
import Home from '@/views/Home';
// import About from '@/views/About'
import { Navigate } from 'react-router-dom';

// 定义懒加载模块
const About = lazy(() => import('@/views/About'))

/**
 * @description: 将懒加载的组件外层包裹一个React.Suspense标签 用来展示加载中的组件
 * @param {JSX.Element} lazyLoadComponentTagName 需要进行懒加载的组件
 * @return {JSX.Element}
 */
const withLazyLoadComponent = (lazyLoadComponentTagName: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {lazyLoadComponentTagName}
        </React.Suspense>
    )
}

const routes = [
    {
        path: '/',
        element: <Navigate to='/home' /> // 使用重定向组件 重定向到Home
    },

    {
        path: '/home',
        element: <Home />
    },

    {
        path: '/about',
        // 使用懒加载的组件的写法，外面需要套一层类似Loading的标签来向用户提示加载组件
        element: withLazyLoadComponent(<About/>)
    }
]

export default routes