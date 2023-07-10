/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-04 16:34:09
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 18:33:48
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/views/Page1.tsx
 * @Description: Page1页面
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import { useDispatch, useSelector } from "react-redux";
const Page1 = () => {
    // 通过useDispatch修改仓库数据
    const dispatch = useDispatch()

    // 通过useSelector来获取仓库数据 对num属性的操作
    const {num} = useSelector((state: RootState) => {
        return {num: state.numReducer.num}
    })
    /**
     * @description: 修改仓库中num的操作
     * @return {*}
     */
    const changeNum = () => {        
        // dispatch({type: '字符串'(可以认为是一个记号), data: xxx}) type是固定的，data是自定义的
        dispatch({type: 'increment', data: 1})
    }

    /**
     * @description: 异步加按钮
     * @return {*}
     */
    const changeNumAsync = () => {
        dispatch({type: 'incrementAsync', data: 1})
    }

    // 对testArr属性的操作
    const {testArr} = useSelector((state: RootState) => {
        return {testArr: state.arrReducer.testArr}
    })
    const changeArr = () => {
        dispatch({type: 'testArrPush', data: 'abc'})
    }

    return(
        <div className="page1">
            <p>这是Page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>点我同步+1</button>
            <button onClick={changeNumAsync}>点我异步+1</button>
            <p>{testArr}</p>
            <button onClick={changeArr}>点我push数组</button>
        </div>
    )
}

export default Page1