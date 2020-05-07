import React from 'react'
// 在user组件中调用异步请求的方法：get_user
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user'
class User extends React.Component {
    render() {
        console.log(this.props)
        const { error, isFetching, user } = this.props.user
        let data
        if (error) {
            data = error
        } else if (isFetching) {
            data = 'loding...'
        } else {
            data = user.name
        }
        return (
            <div>
                <p>User</p>
                {/* <p> { this.props.user.user.name } </p> */}
                <p> { data } </p>
                <button onClick={ () => { this.props.userActions.get_user() } }>点击发请求</button>
                {/* <p>{this.props}</p> */}
            </div>
        )
    }
}

const mapStateToPropos = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToPropos = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToPropos,mapDispatchToPropos)(User)