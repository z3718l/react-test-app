import React from 'react'
export default class MyNav extends React.Component{
    render () {
        // console.log(this.props.nav) // 会接收到父组件传进来的数据
        return (
            <div>
                {/* jsx语法 */}
                {/* 注意：在子组件中不能修改props中的数据，因为该数据是父组件的数据，不能在子组件中更改，想要修改需要在父组件中修改 */}
                <h3>{ this.props.title }</h3>
                <ul>
                    {
                        this.props.nav.map((item, index) => {
                            return <li key={ index }>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}