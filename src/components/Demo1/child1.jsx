import React from 'react'
/**
 * 不管num是不是变化，child都会重新渲染，
 * 现在需求：如果传到chidl中的num不变，child组件就不再重新渲染
 */
/**
 * 
 * Component:不会对数据进行比较
 * PureComponent：会对数据进行浅比较，复杂的数据就不能用这个方式进行比较
 */
export default class Child1 extends React.PureComponent{
    
    render() {
        console.log('child1 render->')
        return (
            <div>Child1:{ this.props.num }</div>
        )
    }
}