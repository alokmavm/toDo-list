import React from 'react'

function ToDoLists(props) {
 
  return (
    <>
   <div className="todo_style">
      <i className="fa fa-times" onClick={()=>{
        props.onSelect(props.id)
      }}></i>
      <li>{props.text}</li>
   </div>
    </>
  )
}

export default ToDoLists