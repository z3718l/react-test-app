import React from 'react'

export default class StateComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }
    inscrement() {
        // this.setState({
        //     count: this.state.count += 1
        // })
    }
    decrement = () => {
        // console.log(this)
        // this.setState({
        //     count: this.state.count -= 1
        // })
    }
    render () {
        return (
            <div>
                <h1>这是state</h1>
                <p>这是state中的值：{ this.state.count }</p>
                <p><button onClick={ this.inscrement.bind(this) }>增加</button></p>
                <p><button onClick={ this.decrement }>减少</button></p>
            </div>
        )
    }
}
