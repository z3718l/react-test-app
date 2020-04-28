// 用类的形式创建组件,还有hook形式
import React from 'react'

class App extends React.Component{
    
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello word</h1>
                <p>{this.props.value}</p>
                <button onClick={this.props.onIncrement}>增加</button>
                <button onClick={this.props.onDecrement}>减少</button>
            </div>
        )
    }
}

export default App
