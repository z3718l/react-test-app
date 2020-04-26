import React from 'react'
export default class NewForm extends React.Component{
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    // 提交表单
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止默认提交事件
        console.log(this.state.value)
    }
    changeHandler = (event) => {
        this.setState({value: event.target.value})
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={ this.state.value } onChange={ this.changeHandler }/>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}