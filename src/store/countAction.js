/**
 * 专门为count组件生成action对象
 */

import { INCREMENT } from "./const";

export const createIncrement = (data) => ({ type: INCREMENT, data });

// 异步action
export const createAsyncIncrement = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrement(data));
        }, time);
    }
}