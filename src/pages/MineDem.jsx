import React from 'react'
import { withRouter } from "react-router-dom"
class MineDem extends React.Component {
    // demo2clickhandler = () => {
    //     console.log(this.props) // 这个时候 props是空的
    // }
    demo2clickhandler () {
        console.log(this.props); // 如果该组件没有放到Router里面，打印就是空对象
        
    }
    render () {
        return (
            <div>
                <button onClick={this.demo2clickhandler.bind(this)}>回到首页2</button>
            </div>
        )
    }
}
// withRouter高阶组件
export default withRouter(MineDem)