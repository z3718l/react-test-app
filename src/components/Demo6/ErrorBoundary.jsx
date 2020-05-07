import React from 'react'

export default class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Something went wrong.</h1>
            )
        }
        return this.props.children
    }
}
