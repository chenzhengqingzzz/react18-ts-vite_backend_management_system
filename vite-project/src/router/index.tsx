/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-24 20:13:33
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-07 14:23:14
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
const Login = lazy(() => import('@/views/Login'))
const About = lazy(() => import('@/views/About'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page301 = lazy(() => import('@/views/Page301'))
const Page401 = lazy(() => import('@/views/Page401'))

/**
 * @description: 将懒加载的组件外层包裹一个React.Suspense标签 用来展示加载中的组件
 * @param {JSX.Element} lazyLoadComponent 需要进行懒加载的组件
 * @return {JSX.Element}
 */
const withLazyLoadComponent = (lazyLoadComponent: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {lazyLoadComponent}
        </React.Suspense>
    )
}

const routes = [
    // 嵌套路由 开始------------------
    {
        // 这里是检测到后面没有路径，则配置重定向到page1
        path: '/',
        element: <Navigate to='/page1' /> // 使用重定向组件 重定向到Page1
    },
    {
        // 定义展示home路由及其子路由
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: withLazyLoadComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: withLazyLoadComponent(<Page2 />)
            },
            {
                path: '/page3/page301',
                element: withLazyLoadComponent(<Page301 />)
            },
            {
                path: '/page4/page401',
                element: withLazyLoadComponent(<Page401 />)
            }
        ]
    },
    // 嵌套路由 结束------------------

    {
        path: '/login',
        element: withLazyLoadComponent(<Login/>)
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        // 使用懒加载的组件的写法，外面需要套一层类似Loading的标签来向用户提示加载组件
        element: withLazyLoadComponent(<About />)
    },
    // 配置路由表以外的所有路径重定向
    {
        path: '*',
        element: <Navigate to='/page1' /> // 使用重定向组件 重定向到Page1

    },
]

export default routes