import React from 'react'

export  const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div className='my-3'>
        <h4 >{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delet</button>
        {/* <hr/> */}
    </div>
    <hr/>
    </>
  )
} 

// export default TodoItem
