import React, { useState } from 'react'
import ToDoLists from './ToDoLists';
function ToDo() {
    const [inputList,setInputList] = useState("");
    const [Item,setItem] = useState([]);
     const itemEvent=(event)=>{
     setInputList(event.target.value)
  }

  const listOfItem = ()=>{
       setItem((oldItem)=>{
        return [...oldItem, inputList]
       })
       setInputList("");
  }

  const deletItems =(id)=>{
   // console.log('clicked')
   setItem((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
          return index!==id
      })
   })
  }
  return (
    <>
    <div className='main_div'>
        <div className="center_div">
           <h1>ToDo List</h1>
           <input type="text" placeholder='add a Items' onChange={itemEvent}
           value={inputList}
           />
           <button onClick={listOfItem}> + </button>
           <ol>
            {/* <li>{inputList}</li> */} 
             {Item.map((itemValue, index)=>{
                return <ToDoLists text= {itemValue}
                key={index} id = {index}
                onSelect = {deletItems}
                />
                 } )}
           </ol>
        </div> 
    </div>
    </>
   )
}

export default ToDo