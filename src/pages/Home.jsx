import React from 'react'
import { Prompt } from 'react-router-dom'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    render () {
        return (
            <div>
                <p>Home</p>
                <Prompt
                    when={!!this.state.name}
                    message="Are you sure you want to leave?"
                    />
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
        )
    }
}