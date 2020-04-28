import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import counter from './reducer/counter'
import { createStore } from 'redux'
const store = createStore(counter)
// store.subscribe(() => { console.log(store.getState()) })
const render = () => {
  ReactDOM.render(
    <App
      onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
      onDecrement={ () => store.dispatch({ type: 'DECREMENT' }) }
      value={store.getState()}
    />, 
    document.getElementById('root')
  )
}
render()
store.subscribe(render)
