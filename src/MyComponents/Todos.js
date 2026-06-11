import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div>
        Todos works!!
        <Todo todo={props.todos[0]}></Todo>
    </div>
  )
}

export default Todos
