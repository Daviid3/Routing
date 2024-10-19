import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: "80vw" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/profile"}>Profile</Link>
    </div>
  )
}

export default Navbar