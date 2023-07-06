/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-06 12:10:07
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-06 16:20:52
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
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

// 登录请求到数据，就可以跟items这个数组进行匹配，根据登录用户权限来决定展现什么内容
const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined />,
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined />,
    },
    {
        label: '栏目3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            },
            {
                label: '栏目302',
                key: '/page3/page302'
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: 'Team',
        key: '栏目4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            }
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined />
    }
]
 
const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRouteObj = useLocation()
    // console.log(currentRouteObj);
    //如果发现加载两次，这是开发环境下才会生产环
    // 境就不会了，在main.tsx把严格，模式标签去掉就不会了。至于为什么react要它加载两次详情见：
    // https://blog.csdn.net/HYHhmbb/article/details/125973790

    /**
     * @description: 点击侧边菜单栏的点击事件回调
     * @param {*} e 事件对象
     * @return {*}
     */
    const menuClick = (e: { key: string }) => {
        console.log('点击了左侧菜单，将要跳转的路径为：' + e.key);
        
        // 点击跳转到对应的路由 编程式导航跳转 需要用到useNavigate这个Hook
        navigateTo(e.key);
    };

    /**
     * @description: 展开和关闭某项菜单的时候执行回调
     * @param {Array} keys 记录了当前被展开项目的key的数组
     * @return {*}
     */
    const handleMenuOpenChange = (keys: string[]) => {
        // console.log(keys);
        // 把这个数组修改成openKeys存入的东西 我们只需要一项展开
        setOpenKeys([keys[keys.length - 1]]);
    };

    // 定义控制当前展开项目的state，这个数组决定哪一项展开里面存啥我们就把key存进去
    const [openKeys, setOpenKeys] = useState([""]);

    return (
        <Menu
            theme="dark"
            // 表示当前的样式所在的选中项 通过key传递
            defaultSelectedKeys={[currentRouteObj.pathname]}
            mode="inline"
            // 菜单项的数据
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
