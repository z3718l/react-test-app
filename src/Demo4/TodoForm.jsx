// import React, { useState } from 'react'
// const TodoForm = () => {
//     const [value, setValue] = useState("")
//     return (
//         <div>
//             <input type="text" value={value} onChange={ (e) => { setValue(e.target.value) } }/>
//         </div>
//     )
// }
// export default TodoForm


// 自定义一个inputvalue的hook
import React, { useState } from 'react'
const useInputValue = (initValue) => {
    const [value, setValue] = useState(initValue)
    return {
        value,
        onChange: (e) => { setValue(e.target.value) },
        restValue: () => { setValue("") }
    }
}
const TodoForm = ({ onSubmit }) => {
    const { restValue ,...text } = useInputValue("")
    // const password = useInputValue("")
    function handleSubmit (e) {
        e.preventDefault()
        // console.log(text, '====text')
        onSubmit(text.value)
        restValue() // 清空输入框
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" { ...text }/>
                {/* <input type="password" { ...password }/> */}
            </form>
        </div>
    )
}
export default TodoForm
