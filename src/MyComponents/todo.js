import React from 'react'

const todo = (props) => {
  return (
    <div>
      Todo works!!
      <h4>{props.todo.sno}</h4>
      <h5>{props.todo.task}</h5>
      <p>{props.todo.description}</p>
    </div>
  )
}

export default todo
