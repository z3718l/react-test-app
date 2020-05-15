import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [name, setName] = useState('')
    const [loading, setLoding] = useState(true)

    useEffect(() => {
        // 为什么要加一个自执行函数：在useEffect中直接发起网络请求，会报警告ß
        (async () => {
            const resData = await fetch(url)
            const data = await resData.json()
            // console.log(data)
            setName(data[0].name)
            setLoding(false)
        })()
    })
    return {name, loading}
}

const Demo6 = () => {
    // const [name, setName] = useState('')
    // const [loading, setLoding] = useState(true)

    // useEffect(() => {
    //     // 为什么要加一个自执行函数：在useEffect中直接发起网络请求，会报警告ß
    //     (async () => {
    //         const resData = await fetch('http://jsonplaceholder.typicode.com/users')
    //         const data = await resData.json()
    //         // console.log(data)
    //         setName(data[0].name)
    //         setLoding(false)
    //     })()
    // })
    const {name, loading} = useFetch('http://jsonplaceholder.typicode.com/users')
    return (
        <div>{loading ? <div>...loading</div> : name}</div>
    )
}
export default Demo6

