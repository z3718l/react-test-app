import React, { useContext } from 'react'
import { MyContent } from './MainPage'
function ChildPage () {
    return (
    <p>{ useContext(MyContent) }</p>
    )
}
export default ChildPage
