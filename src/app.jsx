import React from 'react'
import Demo1 from './Demo1'
import Demo2 from './Dome2'
import Demo3user from './Demo3/user'
import Demo3token from './Demo3/tokenForm'
import TodoList from './Demo4/TodoList'
import Demo5 from './Demo5'
import Demo6 from './Demo6'
// import Demo7 from './Demo7'
import Demo8 from './Demo8'
import Demo9 from './Demo9'
import Demo10 from './Demo10/MemoDemo'
import Demo11 from './Demo11'

class App extends React.Component{
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello word</h1>
                {/* <Demo1/> */}
                {/* ========= */}
                {/* <Demo2/> */}
                {/* ========= */}
                {/* <Demo3user/> */}
                {/* <Demo3token/> */}
                {/* <TodoList/> */}
                {/* <Demo5/> */}
                {/* <Demo6/> */}
                {/* <Demo9/> */}
                {/* <Demo10/> */}
                <Demo11/>
            </div>
        )
    }
}

export default App
