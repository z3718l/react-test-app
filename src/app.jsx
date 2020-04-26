// 用类的形式创建组件,还有hook形式
import React from 'react'
// import Home from './home.jsx'
// import MyNav from './myNav.jsx'
// import ComponentLife from './compnentLife.jsx'
// import SetStateDemo from './setStateDemo.jsx'
// import StateComponent from './stateComponent.jsx'
// import IfDemo from './ifDemo.jsx'

import NewForm from './newForm.jsx'
import RefsDom from './refsDom.jsx'
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            titleText: '文本1'
        }
    }
    clickHandler = (data) => {
        this.setState({
            // titleText: '文本2'
            titleText: data
        })
    }
    // 渲染函数
    render() {
        // 在render函数中定义变量
        // const nav1 = ['web', 'js', 'java']
        // const nav2 = ['首页', '学习', '视频']
        return (
            <div>
                <h1>hello word</h1>
                {/* <Home/>
                <MyNav nav = { nav1 } title="导航1"/>
                <MyNav nav = { nav2 } title="导航2"/>
                <StateComponent/>
                <ComponentLife titleText={ this.state.titleText } clickHandlers={this.clickHandler}/>
                <SetStateDemo/> */}
                {/* <button onClick={this.clickHandler}>修改文本</button> */}
                {/* <IfDemo/> */}
                <NewForm/>
                <RefsDom/>
            </div>
        )
    }
}

export default App
