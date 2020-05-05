import * as actions from '../constans/index'
// export function increment(num) {
//     return {
//         type: actions.INCREMENT,
//         num
//     }
// }
export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actions.INCREMENT,
                num
            })
        }, 2000)
    }
}
export function decrement (num) {
    return {
        type: actions.DECREMENT,
        num
    }
}