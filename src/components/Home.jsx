import React from 'react'
import Demo2 from './Demo2'
// import Demo3 from './Demo3'
import Demo4 from './Demo4'

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <p>hoem</p>
                <Demo2/>
                {/* <Demo3/> */}
                <Demo4/>
            </div>
        )
    }
}