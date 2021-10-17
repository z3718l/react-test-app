/**
 * 1、该文件是用于创建一个为count服务的reducer,reducer本质就是一个函数；
 * 2、reducer函数接收两个参数，一个是之前的状态(state),另一个是action对象；
 */
import { INCREMENT } from "./const";
const initState = 0;
export default function counter(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
