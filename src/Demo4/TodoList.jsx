import React, { useState } from 'react'
import TodoForm from './TodoForm'
const TodoList = () => {
    const [todos, setTodos] = useState([])
    function setSubmitHandle(text) {
        setTodos([{text}, ...todos])
    }
    console.log(todos)
    function clickClear() {
        setTodos([])
    }
    return (
        <div>
            <TodoForm onSubmit={ setSubmitHandle }/>
            <div>
                {
                    todos.map((item, index) => {
                        return (
                            <div key={index}>{ item.text }</div>
                        )
                    })
                }
            </div>
            <button onClick={ clickClear }>clear me</button>
        </div>
    )
}
export default TodoList