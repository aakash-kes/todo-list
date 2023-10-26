import React, { useState } from 'react'
import './style.css'
// import { type } from '@testing-library/user-event/dist/type'
import TodoList from './TodoList'

const Todo = () => {
  const [data, setData] = useState()
  const [item, setItem] = useState([])

  const itemChange = (event) => {
    setData(event.target.value)
  }

  const listOfItem = () => {
    setItem((oldItem) => {
      return [...oldItem, data]
    })
    setData('')
  }

  // console.log('style ', style)
  return (
    <>
      <div className="Body">
        <div className="Container">
          <h1 className="Heading">TODO LIST</h1>
          {/* <h2 style={{ color: 'red' }}>This is aakash</h2> */}

          <br />
          <input
            className="InputCss"
            type="text "
            // width="autogit push -u origin mainz"
            placeholder="Enter Text Here"
            value={data}
            onChange={itemChange}
          />
          <button className="ButtonCss" onClick={listOfItem}>
            Add +
          </button>

          <ol>
            {item.map((itemValue) => {
              return <TodoList text={itemValue} />
              //<li>{itemValue}</li>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Todo
