// 普通的class写法
// import React from 'react'
// export default class Demo1 extends React.Component {
//     render () {
//         return (
//             <div>hello Demo1</div>
//         )
//     }
// }

// 使用函数编写组件
/**
 * 这样写法比class写法简单，而且不用去理解class
 * 但是没有使用state
 */
// import React from 'react'
// export default () => {
//     return (
//         <div>hello word</div>
//     )
// }

// 使用hook
/**
 * count:状态
 * setCount：setState -> setCount
 * useState(0):默认值
 */
import React, { useState } from 'react'
export default () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
        </div>
    )
}
