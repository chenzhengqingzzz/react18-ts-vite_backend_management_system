/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-24 18:15:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-05 17:06:00
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Home.tsx
 * @Description: Home首页组件
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/page1", <PieChartOutlined />),
  getItem("Option 2", "/page2", <DesktopOutlined />),
  getItem("User", "page3", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "page4", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigateTo = useNavigate();

  /**
   * @description: 点击侧边菜单栏的点击事件回调
   * @param {*} e 事件对象
   * @return {*}
   */
  const menuClick = (e: { key: string }) => {
    // 点击跳转到对应的路由 编程式导航跳转 需要用到useNavigate这个Hook
    navigateTo(e.key)
  };

  /**
   * @description: 展开和关闭某项菜单的时候执行回调
   * @param {Array} keys 记录了当前被展开项目的key的数组
   * @return {*}
   */
  const handleMenuOpenChange = (keys: string[]) => {
    console.log(keys);
    // 把这个数组修改成openKeys存入的东西 我们只需要一项展开
    setOpenKeys([keys[keys.length - 1]])
  }

  // 定义控制当前展开项目的state，这个数组决定哪一项展开里面存啥我们就把key存进去
  const [openKeys, setOpenKeys] = useState([''])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
          // 某项菜单展开和回收的事件
          onOpenChange={handleMenuOpenChange}
          // 当前展开的菜单项key数组
          openKeys={openKeys}
        />
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
             */ }
          <Outlet/>
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
