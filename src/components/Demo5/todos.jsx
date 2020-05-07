import React from 'react'
// 首先引入高阶组件
import WidthFetch from './widthFetch'

const Todos = WidthFetch('http://jsonplaceholder.typicode.com/todos')(props => {
    console.log(props)
    return (
        <div>
            <p>
                TodosList：{ props.data[0].title }
            </p>
        </div>
    )
})

export default Todos
