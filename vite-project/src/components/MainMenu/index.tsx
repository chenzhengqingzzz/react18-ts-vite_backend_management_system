/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-06 12:10:07
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-06 14:06:19
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/components/MainMenu/index.tsx
 * @Description: 公用组件MainMenu，页面左侧主菜单
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
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



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

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate()

  /**
   * @description: 点击侧边菜单栏的点击事件回调
   * @param {*} e 事件对象
   * @return {*}
   */
  const menuClick = (e: {key: string}) => {
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
    setOpenKeys([keys[keys.length - 1]]);
  };

  // 定义控制当前展开项目的state，这个数组决定哪一项展开里面存啥我们就把key存进去
  const [openKeys, setOpenKeys] = useState([''])

  return (
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
  );
};

export default MainMenu;
