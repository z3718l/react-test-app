import * as actions from '../constans/index'
export function increment() {
    return {
        type: actions.INCREMENT
    }
}
export function decrement () {
    return {
        type: actions.DECREMENT
    }
}