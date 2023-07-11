/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-11 16:34:38
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-11 16:56:38
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/api/request.ts
 * @Description: 对axios进行二次封装 里面有请求拦截器和响应拦截器
 *
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import axios from "axios";

// 创建axios实例
const requests = axios.create({
  // 基本请求路径
  baseURL: "http://xue.cnkdl.cn:23683",
  // 请求过期时间 如果超过这个数值 则会认为请求失败
  timeout: 20000,
});

/**
 * @description: 请求拦截器
 * @param {*} config 包含重要属性的配置对象
 * @return {*}
 */
requests.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * @description: 响应拦截器
 * @param {*} response 包含重要属性的响应配置对象
 * @return {*}
 */
requests.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default requests
