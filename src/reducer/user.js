import { FETCH_USER_SUCCESS, FETCH_USER_PENDING, FETCH_USER_FAILURE } from '../constans/index'

let initState = {
    user: {},
    isFetching: false,
    error: null
}

const user = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                user: action.user,
                isFetching: false,
                error: null
            }
        case FETCH_USER_PENDING:
            return {
                user: {},
                isFetching: true,
                error: null
            }
        case FETCH_USER_FAILURE:
            return {
                user: {},
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
export default user