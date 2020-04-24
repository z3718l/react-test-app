import React from 'react'
export default class MyNav extends React.Component{
    render () {
        // console.log(this.props.nav) // 会接收到父组件传进来的数据
        return (
            <div>
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