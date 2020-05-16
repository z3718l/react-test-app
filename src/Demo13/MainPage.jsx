import React from 'react'
import Child from './ChildPage'
export const MyContent = React.createContext()
function MainPage () {
    return (
        <div>
            <MyContent.Provider value="父组件的值">
                <Child/>
            </MyContent.Provider>
        </div>
    )
}
export default MainPage