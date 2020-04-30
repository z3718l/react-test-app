import { ADD_USER } from '../constans/index'
const user = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            state.name = 'zhangsan'
            return state
        default:
            return state
    }
}
export default user