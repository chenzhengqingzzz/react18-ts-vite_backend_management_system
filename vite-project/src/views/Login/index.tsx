/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-07 13:53:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-07 19:34:52
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
                        <div className="captchaBox">
                            <Input placeholder="验证码" />
                            <div className="captchaImg">
                                <img height="38px" src="data:image/png;base64,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" alt="" />
                            </div>
                        </div>
                        <Button type="primary" className='loginBtn' block>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login