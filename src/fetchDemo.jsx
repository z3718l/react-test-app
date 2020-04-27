import React from 'react'
export default class FecthDemo extends React.Component {
    componentDidMount () {
        fetch('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    render () {
        return (
            <div>fetch</div>
        )
    }
}