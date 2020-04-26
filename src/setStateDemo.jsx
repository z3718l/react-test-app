import React from 'react'
export default class SetStateDemo extends React.Component{
    constructor() {
        super()
        this.state = {
            countState: 6
        }
    }
    // 方法1:使用setState中的回调函数
    // handleChange = () => {
    //     this.setState({
    //         countState: this.state.countState + 1
    //     }, () => {
    //         console.log(this.state.countState) // 这里写个打印可以和this.state.countState可以同步展示
    //     })
    //     // console.log(this.state.countState) // 在这里打印
    // }

    async handleChange () {
        await this.setStateAsync({countState: this.state.countState + 1})
        console.log(this.state.countState)
    }
    // 方法2:使用promise
    // 注意：这种写法没发使用es6写法，所以需要绑定this的指向
    setStateAsync (state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }
    render () {
        return (
            <div>
                <p>setState是同步还是异步</p>
                <p>{ this.state.countState }</p>
                <button onClick = { this.handleChange.bind(this) }>修改</button>
            </div>
        )
    }
}