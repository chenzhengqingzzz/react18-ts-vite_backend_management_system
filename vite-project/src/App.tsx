/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-23 16:19:13
 * @LastEditors: 陈正清macbook pro
 * @LastEditTime: 2023-06-25 18:01:17
 * @FilePath: /react18-ts-vite_backend_management_system/vite-project/src/App.tsx
 * @Description: 所有组件的父组件App
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// import { Button } from 'antd'
// import { FastBackwardOutlined } from '@ant-design/icons'
import { useRoutes } from 'react-router-dom'
import router from '@/router'

function App() {
  const outlet = useRoutes(router)
  return (
    <div className='App'>
      {/* <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}

      {/* 占位符组件 类似于窗口，用来展示组件 有点像Vue中的router-view */}
      {/* <Outlet></Outlet> */}

      {/* Hook形式生成的对象 */}
      {outlet}
    </div>
  )
}

export default App
