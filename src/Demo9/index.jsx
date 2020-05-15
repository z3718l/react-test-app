// 组件清除
import React, {useState, useEffect} from 'react'
const MyAPI = {
    count: 0,
    subscribe(cb) {
        this.interveld = setInterval(() => {
            this.count += 1
            cb(this.count)
        }, 1000)
    },
    unsubscribe() {
        clearInterval(this.interveld)
        this.reset()
    },
    reset() {
        this.count = 0
    }
}
// export default class Demo9 extends React.Component {
//     state = {
//         count: 0
//     }
//     componentDidMount() {
//         MyAPI.subscribe(count => {
//             this.setState({
//                 count: count
//             })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 { this.state.count }
//             </div>
//         )
//     }
// }

const Demo9 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        MyAPI.subscribe(currentCount => {
            setCount(currentCount)
        })
        return () => {
            MyAPI.unsubscribe()
        }
    },[])
    return (
        <div>{ count }</div>
    )
}

export default Demo9