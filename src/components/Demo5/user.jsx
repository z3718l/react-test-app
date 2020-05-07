import React from 'react'
// 首先引入高阶组件
import WidthFetch from './widthFetch'

const User = WidthFetch('http://jsonplaceholder.typicode.com/users')(props => {
    console.log(props)
    return (
        <div>
            <p>
                UserList：{ props.data[0].name }
            </p>
        </div>
    )
})

export default User