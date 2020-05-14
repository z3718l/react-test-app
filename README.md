1. 为什么要加入hook
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
   为什么要在effect中返回一个函数：
   解析：这是effect可选的清除机制，每个effect都可以返回一个清除函数。
   react何时清除effect：
   解析：react会在组件卸载的时候清除effect
   注意：effect需要清除的就return一个函数，如果不需要清除的话，就不用返回函数
   ```
5. hook使用规则
   ```
    1、只在顶层使用Hook
        不要在循环、条件或者嵌套函数中调用Hook
    2、只在react函数中使用Hook
        不要在普通的js函数中调用hook
  ```
6. 
