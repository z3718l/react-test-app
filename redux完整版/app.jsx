import React from 'react';
import store from './store';
import { createIncrement } from './store/countAction'

class App extends React.Component{
    add = () => {
        console.log('点击+1');
        console.log(createIncrement, '==>>');
        // 触发redux
        // store.dispatch({type: 'increment'})
        store.dispatch(createIncrement(1))
    }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         console.log('====>>>', store);
    //     })
    // }
    // 渲染函数
    render() {
        return (
            <div>
                <h1>hello word</h1>
                <div>{store.getState()}</div>
                <button onClick={this.add}>点击+1</button>
            </div>
        )
    }
}

export default App
