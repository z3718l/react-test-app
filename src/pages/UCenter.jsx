import React from 'react'
const UCenter = (props) => {
    console.log(props)
    return (
    <div>ucenter:{ props.match.params.id }</div>
    )
}
export default UCenter