/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-06-24 14:48:58
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-06-24 15:33:56
 * @FilePath: /react18+ts+vite后台管理系统/vite-project/src/components/Comp1/index.tsx
 * @Description: 测试组件Comp1
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

// 引入当前文件夹下的样式
// import './comp1.scss'  // 全局引入

// scss模块化引入
import styles from './comp1.module.scss'
function Comp1(){
    return (
        <div className={styles.box}>
            <p>这是Comp1组件里面的内容</p>
        </div>
    )
}

export default Comp1