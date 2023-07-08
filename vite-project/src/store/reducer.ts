// 初始化state
const defautState = {
    num: 20
}

/**
 * @description: 用来加工状态的reducer
 * @param {*} state
 * @return {*}
 */
let reducer = (state = defautState) => {
    return JSON.parse(JSON.stringify(state))
}

export default reducer