import React, { useState, useEffect, useCallback } from 'react'
const Demo11 = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const handleclick = () => {
        setCount(count + 1)
    }
    /**
     * useCallback:
     * 第二个参数决定了是否运行第一个参数执行，也就是本例中的setCount1(count1 + 1)
     * 如果count发生变化，则允许执行，否则不允许执行
     * 第一个参数第一次会执行，之后才会判断第二个参数是否发生变化
     */
    return (
        <div>
            <p>{ count }</p>
            <button onClick={handleclick}>click me</button>
            <p>{ count1 }</p>
            <button onClick={useCallback(() => { setCount1(count1 + 1) },[count])}>click me</button>
        </div>
    )
}
export default Demo11