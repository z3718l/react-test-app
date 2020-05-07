import React, { Component } from 'react'
const widthFetch = (url) => (View) => {
    return class extends Component {
        constructor() {
            super()
            this.state = {
                isLoding: true,
                data: null
            }
        }
        // 在生命周期中发送对应的请求
        componentDidMount() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoding: false,
                    data: data
                })
            })
        }
        // 渲染视图
        render() {
            if (this.state.isLoding) { // 正在加载
                return (
                    <div>loding...</div>
                )
            } else {
                return (
                    <View data={this.state.data}></View>
                )
            }
        }
    }
}
export default widthFetch