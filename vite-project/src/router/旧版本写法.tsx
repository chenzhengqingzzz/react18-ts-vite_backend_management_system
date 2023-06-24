// /*
//  * @Author: czqczqzzzzzz(czq)
//  * @Email: tenchenzhengqing@qq.com
//  * @Date: 2023-06-24 18:18:16
//  * @LastEditors: 陈正清MacPro
//  * @LastEditTime: 2023-06-24 19:53:02
//  * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/router/index.tsx
//  * @Description: React路由 组件写法
//  *
//  * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
//  */
// import App from "@/App";
// import Home from "@/views/Home";
// import About from "@/views/About";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // 两种路由模式的组件： BrowserRouter ( History模式 ) ， HashRouter( Hash模式 )


// const router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           {/* 配置用户访问/的时候重定向到/home路径 */}
//           <Route path="/" element={<Navigate to="/home" />}></Route>

//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default router;
