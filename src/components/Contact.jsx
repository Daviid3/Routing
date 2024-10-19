import React from 'react'
import { useNavigate } from 'react-router'

function Contact() {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate("/profile?name=jon&age=30")
    }
  return (
    <div> <>contact page is loaded...</>
        <button onClick={handleclick}>To Profile Page</button>
    </div>
  )
}

export default Contact