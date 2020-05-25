import React from 'react'
import jwtDecode from 'jwt-decode'
export default class JwtTest extends React.Component {
    constructor() {
        super()
        this.state = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFoYTIiLCJiaXJ0aGRheSI6IjE5OTItMTItMTMiLCJpYXQiOjE1OTA0MTQ0MDl9.165fVncv30FnuZCdsN0PQBUnKQRltDPm4xAcOLpeBPs',
            userInfo: {}
        }
    }
    componentDidMount() {
        console.log(jwtDecode(this.state.token))
        this.setState({
            userInfo: jwtDecode(this.state.token)
        })
    }
    render () {
        const { userInfo } = this.state
        return (
            <div>
                <p>解析token</p>
                <p>username: { userInfo.name }</p>
                <p>birthday: { userInfo.birthday }</p>
            </div>
        )
    }
}