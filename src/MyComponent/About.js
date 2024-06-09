import React from "react";


import todo from "./todo.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
   <>
   <div className="p-5 text-center bg-body-tertiary rounded-3">
    <img className="bi mt-4 mb-3"  width="100" height="100" src={todo}/>
    
    <h1 className="text-body-emphasis">ToDo List </h1>
    <h1 className="text-body-emphasis">From overwhelmed to on top of it </h1>
    <p className="col-lg-8 mx-auto fs-5 text-muted">
    TodoList gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you.
    </p>
  </div>





   </>
     
  )
};
