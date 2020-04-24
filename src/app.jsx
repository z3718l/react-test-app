// 用类的形式创建组件,还有hook形式
import React from 'react'
import Home from './home.jsx'
class App extends React.Component{
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <Home/>
            </div>
        )
    }
}

export default App
