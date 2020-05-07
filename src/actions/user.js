import * as actions from '../constans/index'

export function fetch_user(user) {
    return {
        type: actions.FETCH_USER_SUCCESS,
        user
    }
}

export function fetch_user_pending() {
    return {
        type: actions.FETCH_USER_PENDING
    }
}

export function fetch_user_failure(error) {
    return {
        type: actions.FETCH_USER_FAILURE,
        error
    }
}

export const get_user = () => {
    return dispatch => {
        dispatch(fetch_user_pending())
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user(data[0]))
        }).catch(error => {
            dispatch(fetch_user_failure(error.response.data))
        })
    }
}
