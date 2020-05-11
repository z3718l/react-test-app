/**
 * 需求：修改页面title
 */

//  普通class方式
// import React from 'react'
// export default class Demo2 extends React.Component {
//     state = {
//         count: 0
//     }
//     handletitle = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     componentDidMount() { // 页面上的title没有修改
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     componentDidUpdate() { // 页面上的title跟着修改
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     render() {
//         return (
//             <div>
//                 <p>title:{ this.state.count }</p>
//                 <button onClick={this.handletitle}>修改title</button>
//             </div>
//         )
//     }
// }


// hook方式
import React, { useState, useEffect } from 'react'
export default () => {
    const [count, setCount] = useState(0); // 初始化
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>title:{ count }</p>
            <button onClick={() => { setCount(count + 1) }}>修改title</button>
        </div>
    )
}