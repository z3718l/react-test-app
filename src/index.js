import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
// import './index.css';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App/>, document.getElementById('root')
)



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const element = (
//   <h1>Hello</h1>
// )
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )

// 更新已经渲染的元素

// function tick () {
//   const element = (
//     <div>
//       <h1>hello word</h1>
//       <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)
