import React from 'react'
import Children1 from './children1.jsx'
import Children2 from './children2.jsx'

export default class Parent extends React.Component{
    constructor() {
        super()
        this.state = {
            money: 1
        }
    }
    render () {
        return (
            <div>
                <p>父级元素</p>
                人民币：<Children1 money={ this.state.money }/>
                美元：<Children2 money={ this.state.money }/>
            </div>
        )
    }
}
