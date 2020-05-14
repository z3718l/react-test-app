import React from 'react'
import Demo1 from './Demo1'
import Demo2 from './Dome2'
import Demo3 from './Demo3/user'

class App extends React.Component{
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello word</h1>
                {/* <Demo1/> */}
                {/* ========= */}
                {/* <Demo2/> */}
                {/* ========= */}
                <Demo3/>
            </div>
        )
    }
}

export default App
