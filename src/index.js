import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
// import counter from './reducer/counter'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index'
// 中间件
const looger = store => next => action => {
  console.log('dispatch=>', action)
  let result = next(action)
  console.log('next state->', store.getState())
  return result
}
const store = createStore(rootReducer, {}, applyMiddleware(looger))
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
