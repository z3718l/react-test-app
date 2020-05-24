import React from 'react'
export default class Hello extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>child hello</h1>
                 {/* <p>直接传值：{ this.props.name }</p> */}
                 <p>传obj：{ this.props.name }</p>
            </div>
        )
    }
}