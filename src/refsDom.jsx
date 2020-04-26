import React from 'react'
export default class RefsDom extends React.Component{
    constructor() {
        super()
        this.helloRef = React.createRef()
        this.username = React.createRef()
        this.password = React.createRef()
    }
    clickHandler = () => {
        //console.log(this.helloRef.current) // <div>11</div>
        console.log(this.username.current.value) // 获取表单的value值
        console.log(this.password.current.value) // 获取表单的value值
    }
    componentDidMount() {
        this.helloRef.current.style.color = 'red'
    }
    render () {
        return (
            <div>
                <div ref={this.helloRef}>11</div>

                <input type="text" ref={this.username}/>
                <input type="text" ref={this.password}/>

                <button onClick={this.clickHandler}>获取</button>
            </div>
        )
    }
}