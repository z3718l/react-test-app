import React from 'react'
import PropTypes from 'prop-types'

// 多个组件进行嵌套传值

const Topic = (props) => {
    // return (
    //     <div>{props.color}</div>
    // )
    return (
        // <Comment color={ props.color }/>
        <Comment/>
    )
}

const Comment = (props,context) => {
    return (
        <div>{context.color}</div>
    )
}

export default class Demo3 extends React.Component{
    getChildContext() {
        return {
            color: 'red'
        }
    }
    render() {
        return (
            <div>
                {/* <Topic color="red"/> */}
                <Topic/>
            </div>
        )
    }
}

Comment.contextTypes = {
    color: PropTypes.string
}
Demo3.chilContextTypes = {
    color: PropTypes.string
}