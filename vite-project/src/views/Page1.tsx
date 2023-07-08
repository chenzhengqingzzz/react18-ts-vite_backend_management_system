/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-04 16:34:09
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-08 22:44:22
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Page1.tsx
 * @Description: Page1页面
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useDispatch, useSelector } from "react-redux";
const Page1 = () => {
    // 通过useSelector来获取仓库数据
    const {num} = useSelector((state: any) => {
        return {num: state.num}
    })

    // 通过useDispatch修改仓库数据
    const dispatch = useDispatch()
    /**
     * @description: 修改仓库的数据
     * @return {*}
     */
    const increment = () => {
        
        // dispatch({type: '字符串'(可以认为是一个记号), data: xxx}) type是固定的，data是自定义的
        dispatch({type: 'increment', data: 1})
    }
    return(
        <div className="page1">
            <p>这是Page1页面</p>
            <p>{num}</p>
            <button onClick={increment}>点我+1</button>
        </div>
    )
}

export default Page1