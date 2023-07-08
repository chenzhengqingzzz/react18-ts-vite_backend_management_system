// 初始化state
const defautState = {
    num: 20
}

/**
 * @description: 用来加工状态的reducer
 * @param {Object} state 存放数据的state
 * @param {Object} action dispatch传的包含type、data的对象
 * @return {Object}
 */
let reducer = (state = defautState, action: {type: string, data: number}) => {
    
    // 组件中的dispatch一调用就会执行这里的代码
    switch (action.type) {
        case 'increment':
            state.num += action.data
            break;
    
        default:
            break;
    }
    
    // 通过使用深拷贝，可以确保返回的状态是一个全新的对象
    return JSON.parse(JSON.stringify(state))
}

export default reducer