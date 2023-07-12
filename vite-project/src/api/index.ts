/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-11 16:33:59
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-12 14:16:23
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/api/index.ts
 * @Description: 统一管理请求
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import requests from "./request"

// 我们会将请求参数和返回值的类型都进行约束

/**
 * @description: 获取验证码图片 是get请求 无参数
 * @url '/prod-api/captchaImage'
 * @return {Promise<CaptchaAPIRes>}
 */
export const reqGetCaptcha = (): Promise<CaptchaAPIRes> => {
    return requests({
        method: 'GET',
        url: '/prod-api/captchaImage'
    })
}

/**
 * @description: 登录请求 是post请求 有参数
 * @param {LoginAPIReq} params 传递过来的用户登录信息
 * @return {Promise<LoginAPIRes>}
 */
export const reqLogin = (params: LoginAPIReq): Promise<LoginAPIRes> => {
    return requests({
        method: 'POST',
        url: '/prod-api/login',
        data: params
    })
}