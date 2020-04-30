## Redux

redux和react-redux的区别
redux: js的状态管理，createStore，是一个独立的模块
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
7. 安装react-redux
   ```
   cnpm install react-redux
   ```
8. 在根组件通过react-redux中的Provider把redux和react-redux进行关联
   ```
   import { Provider } from 'react-redux'
   const store = createStore(counter)
   ReactDOM.render(
   <Provider store={ store }>
      <App/>
   </Provider>,
   document.getElementById('root')
   )
   ```
9. 在自组件中引入connect<br/>
   connect作用就是帮我们把app组件和redux连接起来
   ```
   import { connect } from 'react-redux'
   class App extends React.Component{
      render() {
         return (
               <div>
                  <button>增加</button>
                  <button>减少</button>
               </div>
         )
      }
   }
   export default connect(mapStateToProps)(App)
   ```
10. 在app组件中通过mapStateToProps读取数据
   ```
   import { connect } from 'react-redux'
   class App extends React.Component{
      render() {
         return (
               <div>
                  <p>{this.props.counter}</p>
                  <button>增加</button>
                  <button>减少</button>
               </div>
         )
      }
   }
   // counter只是一个变量，可以任意定义，state是在store中传进来的数据
   const mapStateToProps = (state) => {
      return {
         counter: state
      }
   }
   export default connect(mapStateToProps)(App)
   ``` 
11. 
    