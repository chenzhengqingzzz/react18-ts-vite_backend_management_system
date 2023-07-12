/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-12 16:31:37
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from '@/router'
import { useEffect } from 'react'
import { message } from 'antd'

/**
 * @description: 去往Login的组件
 * @return {*}
 */
function ToLogin() {
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  // useEffect模拟生命周期
  useEffect(() => {
    navigateTo('/login')
    message.warning('您还没有登录，请登录后再访问！')
  }, [])
  // 返回div包裹jsx组件
  return <div></div>
}

/**
 * @description: 去往page1的组件
 * @return {*}
 */
function ToPage1() {
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  // useEffect模拟生命周期
  useEffect(() => {
    message.warning('请退出登录后再访问login页面！')
    navigateTo('/page1')
  }, [])
  // 返回div包裹jsx组件
  return <div></div>
}

/**
 * @description: 手写封装路由守卫
 * @return {*}
 */
function BeforeEach() {
  const outlet = useRoutes(router)

  /*
    对于后台管理系统，有两种经典的跳转情况：
      1. 如果有token的情况下访问登录页面，我们将会跳转到首页
      2. 如果没有token的情况下访问需要登录后访问的页面 我们将会跳转到登录页
      3. 其余情况都可以正常放行
  */
  // 定义记录路由的变量 使用hooks
  let location = useLocation()
  let token = localStorage.getItem('react18+TS_token')
  if (location.pathname === '/login' && token) {
    // 这里不能使用useNavigate来实现跳转 因为需要BeforeEach是一个正常的JSX组件

    return <ToPage1 />
  }

  if (location.pathname !== '/login' && !token) {

    return <ToLogin />
  }

  return outlet
}

function App() {
  return (
    <div className='App'>
      {/* <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}

      {/* 占位符组件 类似于窗口，用来展示组件 有点像Vue中的router-view */}
      {/* <Outlet></Outlet> */}

      {/* Hook形式生成的对象 */}
      {/* {outlet} */}
      <BeforeEach />
    </div>
  )
}

export default App
