/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-07 13:53:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-07 17:38:04
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Login/index.tsx
 * @Description: 登录组件（Login）
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

import { useEffect } from 'react';
import { Input, Space, Button } from 'antd'
import styles from './login.module.scss'
import initLoginBackground from './init.ts';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less';

const Login: React.FC = () => {

    /**
     * @description: 加载完这个组件执行这个生命周期钩子
     * @return {*}
     */
    useEffect(() => {
        initLoginBackground()
        // 窗口引起改变的时候再次执行初始化登录背景的操作
        window.onresize = () => {
            initLoginBackground()
        }
    }, [])
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id='canvas' style={{ display: 'block' }}></canvas>
            {/* 登录盒子 */}
            {/* 至于为什么这的类名连接要留空格，笔记会提到 */}
            <div className={styles.loginBox + " loginboxless"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>陈正清&nbsp;·&nbsp;通用后台管理系统</h1>
                    <p>Stay Hungry Stay Foolish</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                        <Input placeholder="用户名" />
                        <Input.Password placeholder='密码' />
                        <Button type="primary" block>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login