/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-11 19:04:18
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-11 19:36:59
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/types/api.d.ts
 * @Description: 专门定义所有请求/响应的参数类型
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

// 对照接口文档规定返回响应的参数类型

// 验证码的响应参数类型约束
declare interface CaptchaAPIRes {
    msg: string,
    msg: string,
    code: number,
    captchaEnabled: boolean,
    uuid: string
}