import React from 'react'
import {TodoItem} from "./TodoItem"
 let mystyle={
  minHight:"70vh",
  backgroundColor:"#f2f2f2",
  padding:10,
  marginTop:5,
  borderRadius:8

 }
const Todos = (props ) => { 
  return (
    <div className='container  ' style={mystyle}>
      <h2 className='text-center  text-danger'>ToDos list</h2><hr/>
      {props.todos.length===0? "No todos to display":
      
      props.todos.map((todo )=>{
        return (<TodoItem todo ={todo} key= {todo.sno} onDelete={props.onDelete}/>)
      })
    }
  
    </div>
  )
}

export default Todos
