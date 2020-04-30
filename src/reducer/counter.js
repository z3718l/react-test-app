// reduer是一个纯函数，就按照函数的方式编写
// 改变store中值的方案
import * as actions from '../constans/index'
const counter = (state = 1, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1
        case actions.DECREMENT:
            return state - 1
        default:
            return state
    }
}
export default counter