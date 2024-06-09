import "./App.css";
import Header from "./MyComponent/Header";
import { AddTodo } from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";

import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    alert("Item Deleted");
    //delete of todos will not work like this in react instead of this we have to use hook
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((item) => {
        return todo !== item;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I .cam adding a todo", title, desc);

    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="start">
      <Router>
        <Header title="My ToDO list" srearchBar={false} />

        <switch>
          <Routes>
            <Route exact path="/" element=
            { (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              ) }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </switch>

        <Footer />
      </Router>
    </ div>
  );
}

export default App;
