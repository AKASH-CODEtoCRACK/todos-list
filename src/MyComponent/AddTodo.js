import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or description can not be blanck")
    } else
      addTodo(title, desc);
    settitle("");
    setdesc("");

  }

  return (
    <div className='container my-3 '>
      <h3 className='text-danger text-center' >➕ Add a ToDo </h3>
      <form onSubmit={submit}>

        <div class="mb-3">
          <label htmlFor="title" className="form-label">ToDo Title</label>
          <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

        </div>
        <div class="mb-3">
          <label htmlFor="desc" className="form-label">ToDo Description</label>
          <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}


