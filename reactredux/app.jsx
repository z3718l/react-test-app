import React from 'react';
import store from './store';
// import { createIncrement, createAsyncIncrement } from './store/countAction';
import Count from './components/Count'

class App extends React.Component{
    // add = () => {
    //     console.log('点击+1');
    //     console.log(createIncrement, '==>>');
    //     // 触发redux
    //     // store.dispatch({type: 'increment'})
    //     store.dispatch(createIncrement(1))
    // }
    // asyncAdd = () => {
    //     console.log('点击+1');
    //     console.log(createIncrement, '==>>');
    //     // 触发redux
    //     // store.dispatch({type: 'increment'})
    //     store.dispatch(createAsyncIncrement(1, 1000))
    // }
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
                <Count store={store}/>
                {/* <div>{store.getState()}</div>
                <button onClick={this.add}>点击+1</button>
                <button onClick={this.asyncAdd}>异步点击+1</button> */}
            </div>
        )
    }
}

export default App