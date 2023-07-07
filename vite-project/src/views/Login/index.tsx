/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-07 13:53:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-07 14:52:07
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Login/index.tsx
 * @Description: 登录组件（Login）
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

import { useEffect } from 'react';
import styles from './login.module.scss'
import initLoginBackground from './init.ts';
const Login = () => {

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
            <canvas id='canvas' style={{display: 'block'}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>陈正清&nbsp;·&nbsp;通用后台管理系统</h1>
                    <p>Stay Hungry Stay Foolish</p>
                </div>
            </div>
        </div>
    )
}

export default Login