/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-06 12:10:07
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-06 19:24:00
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
        label: '栏目4',
        key: 'page4',
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

    // 拿着currentRouteObj.pathname和items数组的每一项的children的key进行对比
    // 如果相等，就让它上一级的key给到openKeys数组中，作为初始值
    // 这个变量记录了我们在刷新之前选中的那个openKey
    let beforeReloadOpenKey: string = ''

    /**
     * @description: 判断路由和每一个item里面存放的key是否相等，我们将会用在下面的find方法中
     * @param {object} item 被遍历的每一个可能会有key的item 
     * @return {Boolean}
     */
    const findKey = (item: {key: string}): Boolean => {
        return item.key === currentRouteObj.pathname
    }

    // 循环遍历items中的每一项的children中的key属性 是否和我们的pathname相等
    items.forEach(item => {
        const children = item!.children
        // 判断是否有children这个属性、判断children这个属性是否为空、判断children里面是否与当前路由相等
        if (children && children.length > 0 && children.find(findKey)) {
            beforeReloadOpenKey = item!.key as string
        }
    });

    // 定义控制当前展开项目的state，这个数组决定哪一项展开里面存啥我们就把key存进去
    const [openKeys, setOpenKeys] = useState([beforeReloadOpenKey]);

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
