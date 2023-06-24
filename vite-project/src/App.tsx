/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-24 19:05:26
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import { Button } from 'antd'
import { FastBackwardOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* 顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type='primary'>Primary Button</Button>
      <FastBackwardOutlined style={{fontSize: '40px', color: '#08c'}} /> */}

      {/* 占位符组件 类似于窗口，用来展示组件 有点像Vue中的router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
