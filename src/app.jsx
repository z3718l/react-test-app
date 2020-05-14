// 用类的形式创建组件,还有hook形式
import React from 'react'
// import Home from './home.jsx'
// import MyNav from './myNav.jsx'
// import ComponentLife from './compnentLife.jsx'
// import SetStateDemo from './setStateDemo.jsx'
// import StateComponent from './stateComponent.jsx'
// import IfDemo from './ifDemo.jsx'

// import NewForm from './newForm.jsx'
// import RefsDom from './refsDom.jsx'
// import Parent from './components/parent.jsx'
// import ComponetsOptions from './componetsOptions.jsx'
// import AntdDemo from './antdDemo.jsx'
// import FecthDemo from './fetchDemo.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";
import Home from './pages/Home.jsx'
import Mine from './pages/Mine.jsx'
import Demo2 from './pages/Demo2.jsx'
import NotFount from './pages/NotFount.jsx'
import UCenter from './pages/UCenter.jsx'
import MineDemo from './pages/MineDemo.jsx'
// import MineDem from './pages/MineDem.jsx'
import CopyBoard from './copyBoard'
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
                <CopyBoard/>
                {/* <Home/>
                <MyNav nav = { nav1 } title="导航1"/>
                <MyNav nav = { nav2 } title="导航2"/>
                <StateComponent/>
                <ComponentLife titleText={ this.state.titleText } clickHandlers={this.clickHandler}/>
                <SetStateDemo/> */}
                {/* <button onClick={this.clickHandler}>修改文本</button> */}
                {/* <IfDemo/> */}
                {/* <NewForm/>
                <RefsDom/> */}
                {/* <Parent/> */}
                {/* <ComponetsOptions>
                    <div>我是子数据（嵌套）</div>
                </ComponetsOptions>
                <AntdDemo/>
                <FecthDemo/> */}
                {/* Switch:确保只加载一个页面 */}
                <Router>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/mine">Mine</NavLink></li>
                        <li><NavLink to="/minedemo">MineDemo</NavLink></li>
                        {/* <li><NavLink to="/minedemo2">MineDemo2</NavLink></li> */}
                    </ul>
                    <Switch>
                        <Route exact strict path="/home">
                            <Home />
                        </Route>
                        <Route exact strict path="/mine">
                            <Mine />
                        </Route>
                        <Route exact strict path="/demo" render = { () => <div>简单的写法demo</div> }></Route>
                        <Route exact strict path="/demo2" render = { (props) => <Demo2 { ...props } name="zhangsan"/> }></Route>
                        <Route exact strict path="/ucenter/:id?" component={UCenter}/>
                        <Route exact strict path="/minedemo" component = { MineDemo }/>
                        {/* 访问hellomine的时候，重定向到mine页面 */}
                        {/* 还可以用于用户访问权限，如果没有访问权限，直接调转到首页，如果有访问权限，就显示当前页 */}
                        <Redirect from='/hellomine' to='/mine' /> 
                        
                        <Route component={NotFount}/>
                    </Switch>
                </Router>  
                {/* 将组件放到Router组件外面，不让Router进行管理 */}
                {/* <MineDem/> */}
            </div>
        )
    }
}

export default App
