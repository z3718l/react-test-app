import React from 'react'

export default class Children1 extends React.Component{
    changeHandler () {
        console.log('ppp')
    }
    render () {
        return (
            <div>
                <input type="text" value={this.props.money} onChange={ this.changeHandler.bind(this) }/>
            </div>
        )
    }
}