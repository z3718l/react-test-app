// 创建store
// 1、引入redux中createStore创建store
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 2、引入reducer函数，处理store给过去的指令
import countReducer from './countReducer.js';
// 3、引入thunk，用于支持异步action
import thunk from 'redux-thunk';
// import { composeWidthDevTools } from "redux-devtools-extension";

// 汇总所有的reducer
// const allReducer = {
//   count: countReducer,
// };

export default createStore(
  //   allReducer,
  countReducer,
  //   composeWidthDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);
