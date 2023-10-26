import React from 'react'

const TodoList = (props) => {
  return (
    <div className="TodoListCss">
      <li>{props.text}</li>
    </div>
  )
}
export default TodoList
//style={{ listStyleType: 'none' }}
