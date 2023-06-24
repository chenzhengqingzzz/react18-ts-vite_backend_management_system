/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-24 16:26:37
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import { Button } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { FastBackwardOutlined } from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type='primary'>Primary Button</Button>
      <FastBackwardOutlined style={{fontSize: '40px', color: '#08c'}} />
    </div>
  )
}

export default App
