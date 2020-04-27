import React from 'react'
import api from './api'
export default class FecthDemo extends React.Component {
    componentDidMount () {
        // fetch('http://jsonplaceholder.typicode.com/posts/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
        
        // 出现跨域
        // fetch('http://localhost:3100/api/list')
        /**
         * 方法1:在package.json中添加"proxy": "http://localhost:3100"
         * 方法2:
         */
        // fetch('/api/list')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })

        api.getList(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    render () {
        return (
            <div>fetch</div>
        )
    }
}