/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-24 19:40:55
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useState } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// import { Button } from 'antd'
// import { FastBackwardOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      {/* 占位符组件 类似于窗口，用来展示组件 有点像Vue中的router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
