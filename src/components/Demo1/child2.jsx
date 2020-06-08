import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Child2 extends React.Component{
    constructor(props) {
        super(props)
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        console.log('child2 render->')
        return (
            <div>Child:{ this.props.num }</div>
        )
    }
}