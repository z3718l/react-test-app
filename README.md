## Redux

redux和react-redux的区别
redux: js的状态管理，createStore
react-redux: 为了在react中容易的使用

1. 安装redux
   ```
   cnpm install --save redux
   ```
2. 新建reducer函数
   ```
   const counter = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }
    export default counter
   ```
3. 在根js文件中引入reducer并创建store
   ```
   import counter from './reducer/counter'
   import { createStore } from 'redux'
   const store = createStore(counter)
   ```
4. 通过store.dispatch修改store中的值
   ```
    onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
    onDecrement={ () => store.dispatch({ type: 'DECREMENT' }) }
   ```
5. 给button添加点击事件
   ```
    <button onClick={this.props.onIncrement}>增加</button>
    <button onClick={this.props.onDecrement}>减少</button>
   ```
6. 通过store.subscribe监听store中的数据变化
   ```
   store.subscribe(() => { console.log(store.getState()) })
   ```