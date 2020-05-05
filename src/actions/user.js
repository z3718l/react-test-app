import * as actions from '../constans/index'

export function fetch_user(user) {
    return {
        type: actions.FETCH_USER_SUCCESS,
        user
    }
}

export const get_user = () => {
    return dispatch => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user(data[0]))
        })
    }
}
