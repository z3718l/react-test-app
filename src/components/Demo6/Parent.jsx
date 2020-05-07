import React from 'react'

// import Errors from './Errors'

// import ErrorBoundary from './ErrorBoundary'

export default class Parent extends React.Component{
    state = {
        count: 0
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render () {
        return (
            <div>
                <h3>这是一个标题</h3>
                {/* <Errors/> */}
                {/* <ErrorBoundary render = {(error, errorInfo) => <p>'发送错误信息'</p>}>
                <Errors/>
                </ErrorBoundary> */}
                <p>{this.state.count}</p>
                <button onClick={this.increment}>增加</button>
                <button onClick={this.decrement}>减少</button>
            </div>
        )
    }
}