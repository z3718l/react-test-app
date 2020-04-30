// 用类的形式创建组件,还有hook形式
import React from 'react'
import { connect } from 'react-redux'
// import { increment, decrement } from './actions/counter'
import { bindActionCreators } from 'redux'
import * as counterAction from './actions/counter'

class App extends React.Component{
    // handleItemClick = (type) => {
    //     console.log(type)
    //     console.log('点击事件')
    // }
    // handleItemClick2 = () => {
    //     console.log('点击事件2')
    // }
    // 渲染函数
    render() {
        console.log(this.props)
        // const { increment, decrement } = this.props
        return (
            <div>
                <h1>hello word</h1>
                {/* <p>{this.props.value}</p> */}
                <p>{this.props.counters}</p>
                <button onClick={ () => this.props.counterAction.increment() }>增加</button>
                <button onClick={ () => this.props.counterAction.decrement() }>减少</button>
                {/* <button onClick={ () => increment() }>增加</button>
                <button onClick={ () => decrement() }>减少</button> */}
                {/* <button onClick={this.props.onIncrement}>增加</button>
                <button onClick={this.props.onDecrement}>减少</button> */}

                {/* <button onClick={ () => { this.handleItemClick('aaa') }}>点击test</button>
                <button onClick={ this.handleItemClick2 }>点击test2</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}
// export default App
// 注意：mapStateToProps和mapDispatchToProps顺序不能写反，否则会报错
export default connect(mapStateToProps, mapDispatchToProps)(App)
