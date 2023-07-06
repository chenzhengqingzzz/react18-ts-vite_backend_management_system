/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-24 18:15:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-06 12:21:09
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Home.tsx
 * @Description: Home首页组件
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { Breadcrumb, Layout } from "antd";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigateTo = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <MainMenu/>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "16px" }}
        >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content
          className="site-layout-background"
          style={{ margin: "16px 16px 0" }}
        >
          {/* 页面展示部分 根据路由变动 */}
          {/* s【!!!!重点】设置占位符展示窗口
             注意：嵌套路由的占位符展示窗口需要用Outlet组件，这里和根路由的展示有所区别 
             */}
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
