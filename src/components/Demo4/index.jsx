import React from 'react'
/**
 * 高阶组件
 * 1、是一个函数
 * 2、参数是一个组件
 * 3、返回值也是一个组件
 */
// 高阶组件可以在中间做一层处理

// 创建一个高阶组件
const widthFetch = (ComposeComponent) => {
    return class extends React.Component {
        // 参数需要传回去{ ...this.props }
        render () {
            return (
                <ComposeComponent { ...this.props }/> 
            )
        }
    }
}

class MyData extends React.Component{
    render() {
        return (
            <div>
                MyData: {this.props.data}
            </div>
        )
    }
}

// 使用高阶组件包裹一下：
const WidthFetch = widthFetch(MyData)

// 定义一个普通的组件
export default class Demo4 extends React.Component {
    render() {
        return (
            <div>
                {/* <WidthFetch data="hello"/> */}
                <WidthFetch data={"hello"}/>
            </div>
        )
    }
}
