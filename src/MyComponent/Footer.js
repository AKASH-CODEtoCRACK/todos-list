import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  let footerstyle = {

    position: "relative",
    top: "35vh",
    // bottom:"0",
    width: "100%"

  }
  return (
    <footer className='d-flex justify-content-center align-items-center bg-dark ' style={footerstyle} >
      <div>
        <p className='text-center m-4 text-info'>
          Developed by @Akash_Tiwari<hr />
          Copyright &copy;2023 MyTodos.List.com<hr />

          Contact :-  <Link className='text-info' to={"mailto:your-project.akashofficial@gmail.com"} target='_blank'>Email- project.akashofficial@gmail.com</Link>
          , <br /> <Link className='text-info' to={"https://www.linkedin.com/in/AkashTiwari--/"} target='_blank'>Linkedin</Link>
          ,+91 9507755863<hr />
        </p>
        <hr />
      </div>
    </footer>
  )
}

export default Footer
