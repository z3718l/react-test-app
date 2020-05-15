// 普通优化方案
// 在componentDidUpdate生命周期函数中触发打印
/**
 * 如果不添加判断，componentDidUpdate修改name也会打印
 */
// import React from 'react'
// export default class Demo5 extends React.Component {
//     state = {
//         count: 0,
//         name: 'zhangsan'
//     }
//     componentDidMount() {
//         document.title = `click ${this.state.count} time`
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             console.log('触发')
//             document.title = `click ${this.state.count} time`
//         }
        
//     }
//     handleClickCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     handleClickName = () => {
//         this.setState({
//             name: 'lisi'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>you clicked {this.state.count}time</p>
//                 <p>名字是：{this.state.name}</p>
//                 <button onClick={this.handleClickCount}>cleck count</button>
//                 <button onClick={this.handleClickName}>cleck name</button>
//             </div>
//         )
//     }
// }


// 通过effect进行优化
/**
 * 需求：只有count发生变化 才触发useEffect函数
 */
/**
 * useEffect的第二个参数：
 * 如果第二个参数没有，相当于componentDidMount、componentDidUpdate
 * 如果第二个参数是空数组[]，相当于componentDidMount
 * 如果第二个参数有数据[count]，只有当count变化的时候才会触发
 * 如果有return，相当于componentWillUnmount(用于清除副作用)
 */
import React, { useState, useEffect } from 'react'
const Demo5 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('zhangsan')
    useEffect(() => {
        console.log('触发')
        document.title = `click ${count} time`
    },[count])
    return (
        <div>
            <p>you clicked {count}time</p>
            <p>名字是：{name}</p>
            <button onClick={() => { setCount(count + 1) }}>cleck count</button>
            <button onClick={() => { setName('lisi') }}>cleck name</button>
        </div>
    )
}
export default Demo5
