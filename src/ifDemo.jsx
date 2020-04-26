import React from 'react'

export default class IfDemo extends React.Component{
    /**
     * 常见的应用：
     * 1、对视图条件进行切换
     * 2、做缺省值
     */
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
    }
    clickHandle = () => {
        this.setState({
            isLogin: true
        })
    }
    render () {
        let showView = this.state.isLogin ? 
        <div>zhangsan</div> :
        <div>请登录</div>
        return (
            <div>
                条件渲染 { showView }
                <p><button onClick={ this.clickHandle }>登录</button></p>
            </div>
        )
    }
}
