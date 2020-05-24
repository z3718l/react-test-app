import React from 'react'
import { Prompt } from 'react-router-dom'
import Hello from '../components/hello'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '变量',
            obj: {
                name: 'zhangsan',
                age: 12
            }
        }
    }
    // var prop = {
    //     name: 'zhangsan',
    //     age: 12
    // }
    // setProps({oooo})
    render () {
        
        return (
            <div>
                <p>Home</p>
                <Prompt
                    when={!!this.state.name}
                    message="Are you sure you want to leave?"
                    />
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <div>
                    <p>props的用法</p>
                    {/* <Hello name="text"/> */}
                    {/* <Hello name={this.state.name}/>  */}
                    {/* <Hello name={'string'}/>  */}
                    {/* <Hello name={[1,2,3]}/> */}
                    {/* <Hello name={[1,2,3]}/>  */}
                    <Hello {...this.state.obj}/> 
                </div>
            </div>
        )
    }
}