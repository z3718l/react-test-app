import React from 'react'

/**
 * 定时器
 * 网络请求
 * 事件监听
 *      等在组件销毁前都应该有相应的处理
 */
// 简单的计数
// 写一个简单的计数组件
const MyAPI = {
    count: 0, // 初始化count
    subscribe(cb) { // 定时计数
        this.intervalId = setInterval(() => {
            this.count += 1
            cb(this.count)
        }, 1000)
    },
    unsubscribe() { // 清除定时计数
        clearInterval(this.intervalId)
        this.reset()
    },
    reset() { // 重置
        this.count = 0
    }
}

export default class Parent extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        MyAPI.subscribe((currentCount) => {
            this.setState({
                count: currentCount
            })
        })
    }
    // 组件销毁前的生命周期
    componentWillUnmount() {
        // 组件销毁前，清除定时器
        MyAPI.unsubscribe()
    }
    render() {
        return (
            <div>
                parent: { this.state.count }
            </div>
        )
    }
}