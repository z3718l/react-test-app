// 点击分页
/**
 * 在useEffect中，发起请求，并添加限制，当page发生改变的时候，请求才会触发
 */

import React, { useState, useEffect } from 'React'
const Demo7 = () => {
    const [page, setPage] = useState(1)
    useEffect(() => {
        // 发起请求，拼接page
    }, [page])

    return (
        <div>
            渲染视图
        </div>
    )
}