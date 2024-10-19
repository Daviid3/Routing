import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Profile from './components/profile'
import Contact from './components/contact'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Router>   
       <Navbar/>
        router
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
     
    </Router></>
    
  )
}

export default App
