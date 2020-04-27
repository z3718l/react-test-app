import React from 'react'
import querystring from 'querystring'
const MineDemo = (props) => {
    console.log(props)
    // http://localhost:3000/minedemo?name=hahah&age=12
    const params = new URLSearchParams(props.location.search)
    console.log(params.get('name')) // hahah
    console.log(params.get('age')) // 12
    const value = querystring.parse(props.location.search)
    /**
     * 需要把json对象中的?截取掉，就可以使用了
     */
    console.log(value) // {?name: "hahah", age: "12"} 
    return (
        <div>MineDemo</div>
    )
}
export default MineDemo