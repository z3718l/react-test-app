import React, { Fragment } from 'react'

class Item extends React.Component {
    render() {
        return (
            <Fragment>
                <li>item1</li>
                <li>item2</li>
            </Fragment>
        )
    }
}

export default class Demo2 extends React.Component{
    render() {
        return (
            <ul>
                <Item/>
            </ul>
        )
    }
}
