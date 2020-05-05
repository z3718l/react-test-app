import { FETCH_USER_SUCCESS } from '../constans/index'

let initState = {
    user: {}
}

const user = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            // 不要直接修改state,返回从action中取到的数据,需要在action中定义user
            return {
                user: action.user
            }
        default:
            return state
    }
}
export default user