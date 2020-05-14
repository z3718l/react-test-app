// 需求：随机切换名称
// import React from 'react'
/**
 * 1、写一个简单的react租价你架构
 * 2、初始化useState数组
 * 3、通过state初始化展示一个名称
 * 4、写一个button的点击按钮，并添加点击事件
 * 5、通过随机数进行随机切换
 */
// const useState = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu']
// export default class User extends React.Component {
//     state = {
//         user: useState[0]
//     }
//     handlClick = () => {
//         // console.log('dianji')
//         let randomIndex = Math.floor(Math.random() * useState.length)
//         let randomUser = useState[randomIndex]
//         // console.log(Math.random())
//         this.setState({
//             user: randomUser
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <p>名称：{ this.state.user }</p>
//                 <button onClick={ this.handlClick }>切换名称</button>
//             </div>
//         )
//     }
// }

// 将上面普通的写法改成hook写法
/**
 * 1、展示逻辑如上
 * 2、引入useState
 * 3、设置：useState中的setUser(randomUser)
 * 4、展示：{ user }，去掉this.state
 */
import React, { useState } from 'react'
const userSet = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu']
const UserFun = () => {
    const [user, setUser] = useState(userSet[0])
    const handlClick = () => {
        let randomIndex = Math.floor(Math.random() * userSet.length)
        let randomUser = userSet[randomIndex]
        setUser(randomUser)
    }
    return (
        <div>
            <p>名称：{ user }</p>
            <button onClick={ handlClick }>切换名称</button>
        </div>
    )
}
export default UserFun

// 总结：使用hook思考的方式简约了一些