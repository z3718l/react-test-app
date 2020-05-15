import React from 'react'
import Child from './child'
/**
 * PureComponent:只能进行浅比较，如果数据稍微复杂 就不能进行比较了
 */
export default class MemoDemo extends React.PureComponent {
    state = {
        // count: 0
        count: new Date()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                // count: this.state.count + 1,
                count: new Date()
            })
        }, 1000)
    }
    render() {
        console.log('render')
        return (
            <div>
                <Child count={1}/>
                count: { this.state.count.toString() }
            </div>
        )
    }
}