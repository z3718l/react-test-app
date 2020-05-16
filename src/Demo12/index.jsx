import React, { useState, useReducer } from 'react'

// 普通的写法，就是写一个增加的函数，再写一个减少的函数
// 通过setCount进行赋值
// function Counter() {
//     const [ count, setCount ] = useState(0)
//     return (
//         <div>
//             <p>{ count }</p>
//             <button onClick={}>+</button>
//             <button onClick={}>-</button>
//         </div>
//     )
// }
// export default Counter
function reducer(state, action) {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return new Error()
    }
}
function Counter() {
    const initSate = {
        count: 0
    }
    const [state, dispatch] = useReducer(reducer, initSate)
    return (
        <div>
            <p>{ state.count }</p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}
export default Counter