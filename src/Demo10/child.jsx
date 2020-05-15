import React from 'react'
const Child = ({count}) => {
    console.log('child render')
    return (
        <div>child:{count}</div>
    )
}
export default React.memo(Child)