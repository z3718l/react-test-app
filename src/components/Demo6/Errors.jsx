import React from 'react'
// 写一个出现错误的组件

export default class Errors extends React.Component{
    render() {
        return (
            <ul>
                {
                    null.map((element, index) => {
                        <li key={index}>{element}</li>
                    })
                }
            </ul>
        )
    }
}
