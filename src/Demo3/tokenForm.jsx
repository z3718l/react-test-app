import React, { useState, useEffect } from 'react'
class TokenForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        const { setToken } = this.props
        const token = this.tokenInput.value
        if (token) {
            setToken(token)
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="token" placeholder="you token" ref={ input => this.tokenInput = input }/>
                </form>
            </div>
        )
    }
}

// 一个文件中可以有多个类，只要是一个类作为主类导出就行了
// class TokenApp extends React.Component {
//     state = {
//         token: null
//     }
//     componentDidMount() {
//         this.setState({
//             token: sessionStorage.getItem('token')
//         })
//     }
//     setToken = (token) => {
//         sessionStorage.setItem('token', token)
//         this.setState({
//             token
//         })
//     }
//     render () {
//         const { token } = this.state
//         return (
//             <div>
//                 { token ? token : <TokenForm setToken={ this.setToken }/> }
//             </div>
//         )
//     }
// }
// export default TokenApp

// 改写成hook方式
const TokenApp = () => {
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    useEffect(() => {
        sessionStorage.setItem('token', token)
    })
    return (
        <div>
            { token ? token : <TokenForm setToken={ setToken }/> }
        </div>
    )
}
export default TokenApp