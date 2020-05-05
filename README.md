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
11. 新建一个action
    ```
    export function increment() {
      return {
         type: 'INCREMENT'
      }
      }
      export function decrement () {
         return {
            type: 'DECREMENT'
         }
      }
    ```
12. 引入increment,decrement
   ```
   import { increment, decrement } from './actions/counter'
   ```
13. 声明mapDispatchToProps
   ```
   const mapDispatchToProps = (dispatch) => {
      return {
         increment: () => { dispatch(increment()) },
         decrement: () => { dispatch(decrement()) }
      }
   }
   export default connect(mapStateToProps, mapDispatchToProps)(App)
   ```
14. 通过button点击触发
   ```
   const { increment, decrement } = this.props
   <button onClick={ () => increment() }>增加</button>
   <button onClick={ () => decrement() }>减少</button>
   ```
不理想的地方：action中会有很多操作<br/>
15. 通过bindActionCreators
   ```
   import { bindActionCreators } from 'redux'
   import * as counterAction from './actions/counter'
   ```
16. 修改mapDispatchToProps写法
   ```
   const mapDispatchToProps = (dispatch) => {
      return {
         counterAction: bindActionCreators(counterAction, dispatch)
      }
   }
   ```
17. 修改button点击事件
    ```
    <button onClick={ () => this.props.counterAction.increment() }>增加</button>
    <button onClick={ () => this.props.counterAction.decrement() }>减少</button>
    ```
18. 提取公共常量
    ```
    1、新建constans文件夹
    export const INCREMENT = 'INCREMENT'
    export const DECREMENT = 'DECREMENT'
    ```
19. 在actons和reducer中添加对应的常量
    ```
    import * as actions from '../constans/index'
      export function increment(num) {
         return {
            type: actions.INCREMENT,
            num
         }
    }
    ```
20. 传递参数
   ```
   1、点击的时候，在方法中传入参数
   2、在actions中接收参数
   3、在reducer中使用参数
   ```
21. 合并reducer,在reducer文件夹中新建index.js
    ```
    import { combineReducers } from 'redux'
    import counter from './counter'
    const rootReducer = combineReducers({
      counter
    })
    export default rootReducer
    ```
22. 修改根目录的引用
   ```
   import rootReducer from './reducer/index'
   const store = createStore(rootReducer)
   ```
23. 取值方式修改
   ```
   const mapStateToProps = (state) => {
    return {
        counters: state.counter
    }
   }
   ```
23. 添加user
24. 添加中间件
25. applyMiddleware用于加载中间件
26. 添加异步操作
    ```
    cnpm install --save redux-thunk
    在index.js中引入
    import thunk from 'redux-thunk'
    const store = createStore(rootReducer, {}, applyMiddleware(logger,thunk))
    ```
27. 异步请求，获取user信息
    ```
    1、修改constans-index.js
    export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
    2、修改reducer-user
    注意：不能直接修改state，只能返回新的state
    import { FETCH_USER_SUCCESS } from '../constans/index'
    let initState = {
      user: {}
    }

    const user = (state = initState, action) => {
         switch (action.type) {
            case FETCH_USER_SUCCESS:
                  // 不要直接修改state,返回从action中取到的数据,需要在action中定义user
                  return {
                     user: action.user
                  }
            default:
               return state
       }
    }
    export default user
    3、修改action
    export function fetch_user(user) {
    return {
        type: actions.FETCH_USER_SUCCESS,
        user
      }
    }
    export const get_user = () => {
      return dispatch => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user(data[0]))
        })
      }
    }
    4、在user.jsx组件中调用get_user方法
    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux'
    import * as userActions from '../actions/user'
    const mapStateToPropos = (state) => {
    return {
        user: state.user
      }
    }
    const mapDispatchToPropos = (dispatch) => {
      return {
         userActions: bindActionCreators(userActions, dispatch)
      }
    }
    export default connect(mapStateToPropos,mapDispatchToPropos)(User)
    5、点击获取，并写入user
    <button onClick={ () => { this.props.userActions.get_user() } }>点击发请求</button>
    <p> { this.props.user.user.name } </p>
    ```
    