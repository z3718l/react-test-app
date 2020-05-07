import React from 'react'
/**
 * 不管num是不是变化，child都会重新渲染，
 * 现在需求：如果传到chidl中的num不变，child组件就不再重新渲染
 */
export default class Child extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.num === this.props.num) { // 如果两次的值一样，就返回false
            return false
        }
        return true
    }
    render() {
        console.log('child render->')
        return (
            <div>Child:{ this.props.num }</div>
        )
    }
}