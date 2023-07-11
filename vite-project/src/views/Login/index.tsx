/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-07 13:53:11
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-11 21:07:37
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Login/index.tsx
 * @Description: 登录组件（Login）
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

import { ChangeEvent, useEffect, useState } from 'react';
import { Input, Space, Button } from 'antd'
import styles from './login.module.scss'
import initLoginBackground from './init.ts';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less';
import { reqGetCaptcha } from '@/api/index.ts';

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
        // 一挂载就发验证码的请求
        getCaptchaImg()
    }, [])


    // ---------冗余的代码---------
    // // 存取用户输入的信息
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [captcha, setCaptcha] = useState('')
    // /**
    //  * @description: 获取用户输入的用户名
    //  * @param {ChangeEvent} e 事件对象
    //  * @return {*}
    //  */
    // const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value)
    // }
    // const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value)
    // }
    // const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setCaptcha(e.target.value)
    // }
    // ---------冗余的代码---------

    /**
     * @description: 自定义钩子处理输入框的数值存进state中
     * @param {*} initValue 占位初始值
     * @return {Array} 存放在state中的值和处理value的函数
     */
    const useInputChange = (initValue = '') => {
        const [value, setValue] = useState(initValue)
        
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }

        return [value, handleChange]
    }

    // 自定义钩子存取用户信息 包括用户名、用户密码、验证码
    const [username, setUsername] = useInputChange()
    const [password, setPassword] = useInputChange()
    const [captcha, setCaptcha] = useInputChange()

    // 定义一个变量 存储验证码图片信息
    const [captchaImg, setCaptchaImg] = useState('')

    /**
     * @description: 点击登录按钮的事件函数
     * @return {*}
     */
    const handleLogin = () => {
        console.log(username, password, captcha);
        
    }

    
    /**
     * @description: 点击验证码图片的事件函数
     * @return {*}
     */
    const getCaptchaImg = async () => {
        // 调用发请求的函数
        // reqGetCaptcha().then(
        //     (res) => {
        //         console.log(res);
                
        //     },
        // )
        
        let CaptchaAPIRes = await reqGetCaptcha()
        if (CaptchaAPIRes.code === 200) {
            // 1. 把图片数据显示在img上面
            setCaptchaImg('data:image/png;base64,' + CaptchaAPIRes.img)
            // 2. 本地保存uuid，给登录的时候用
            localStorage.setItem('uuid', CaptchaAPIRes.uuid)
        }
    }

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
                        <Input placeholder="用户名" onChange={setUsername}/>
                        <Input.Password placeholder='密码' onChange={setPassword}/>
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={setCaptcha}/>
                            <div className="captchaImg" onClick={getCaptchaImg}>
                                <img height="38px" src={captchaImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary" className='loginBtn' block onClick={handleLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login