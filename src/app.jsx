import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Demo1 from './components/Demo1/parent'
import Home from './components/Home'

class App extends React.Component{
    // 渲染函数
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/demo1" component={ Demo1 }></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default App
