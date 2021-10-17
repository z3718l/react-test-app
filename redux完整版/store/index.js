// 创建store
import { createStore } from "redux";
import countReducer from "./countReducer";

export default createStore(countReducer);
