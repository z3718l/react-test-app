// reduer是一个纯函数，就按照函数的方式编写
// 改变store中值的方案
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
export default counter