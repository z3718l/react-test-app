1. 为什么要加入hook
    ```
    1、没有破坏性的改动
    2、
    ```
2. useState
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
