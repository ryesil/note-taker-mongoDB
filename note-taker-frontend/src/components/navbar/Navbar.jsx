import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
   <nav className="navbar bg-dark">
    <h1 ><Link className="link" to="/">Home</Link></h1>
    <h1 ><Link className="link" to='/notes'>Notes</Link></h1>
    <h1 ><Link className="link" to='make'>Take a note</Link></h1>
   </nav>
  )
}

export default Navbar