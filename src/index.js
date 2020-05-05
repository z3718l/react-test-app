import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
// import counter from './reducer/counter'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index'
// 中间件
// 注意：中间件要放在创建场库的上面，因为applyMiddleware要依赖createStore
const looger = store => next => action => {
  console.log('dispatch=>', action)
  let result = next(action) // 加载下一个中间件
  console.log('next state->', store.getState())
  return result
}
const error = store => next => action => {
  try{
    next(action)
  }catch(e){
    console.log(e)
  }
}
const store = createStore(rootReducer, {}, applyMiddleware(looger,error))
// store.subscribe(() => { console.log(store.getState()) })
// const render = () => {
//   ReactDOM.render(
//     <App
//       onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
//       onDecrement={ () => store.dispatch({ type: 'DECREMENT' }) }
//       value={store.getState()}
//     />, 
//     document.getElementById('root')
//   )
// }
// render()
// store.subscribe(render)



ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
