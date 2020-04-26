import React from 'react'
export default class RefsDom extends React.Component{
    constructor() {
        super()
        this.helloRef = React.createRef()
    }
    clickHandler = () => {
        console.log(this.helloRef.current) // <div>11</div>
    }
    componentDidMount() {
        this.helloRef.current.style.color = 'red'
    }
    render () {
        return (
            <div>
                <div ref={this.helloRef}>11</div>
                <button onClick={this.clickHandler}>获取</button>
            </div>
        )
    }
}