// 用类的形式创建组件,还有hook形式
import React from 'react'

class App extends React.Component{
    handleItemClick = (type) => {
        console.log(type)
        console.log('点击事件')
    }
    handleItemClick2 = () => {
        console.log('点击事件2')
    }
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello word</h1>
                <p>{this.props.value}</p>
                <button onClick={this.props.onIncrement}>增加</button>
                <button onClick={this.props.onDecrement}>减少</button>

                <button onClick={ () => { this.handleItemClick('aaa') }}>点击test</button>
                <button onClick={ this.handleItemClick2 }>点击test2</button>
            </div>
        )
    }
}

export default App
