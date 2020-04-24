import React from 'react'
export default class ComponentLife extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            countNum: 5
        }
    }
    componentWillMount() {
        console.log('componentWillMount', '==在组件渲染之前执行')
    }
    componentDidMount() {
        console.log('componentDidMount', '==在组件渲染之后执行')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        // 主要要返回true才能修改
        // 如果返回false，就不能修改数据了
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate', '==数据在改变之前执行')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate', '==数据修改完成执行')
    }
    componentWillReveiceProps() {
        console.log('componentWillReveiceProps', '==props发生改变时代执行')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount', '==组件卸载之前执行')
    }
    changeHandler = () => {
        this.setState({
            countNum: this.state.countNum += 2
        })
    }
    render() {
        return (
            <div>
                <h1>生命周期函数</h1>
                <p>{ this.state.countNum }</p>
                <button onClick = { this.changeHandler }>修改</button>
            </div>
        )
    }
}