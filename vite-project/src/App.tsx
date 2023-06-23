/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-23 16:44:26
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      顶级组件
    </div>
  )
}

export default App
