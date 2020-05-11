*1. 为什么要加入hook
    ```
    1、没有破坏性的改动
    2、
    ```
2. 什么是hook
    ```
    Hook是一些可以让你在函数组件里“钩入”React state及生命周期等特性的函数。
    Hook不能在class组件中使用
    ```
3. useState
   ```
   如果用函数方式编写react组件，state就不能使用了，为了解决这个问题，可以使用useState
   import React, { useState } from 'react'
   export default () => {
       const [count, setCount] = useState(0);
       return (
           <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
           </div>
       )
   }
   ```
4. useEffect
   ```
   ```
