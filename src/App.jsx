import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Nav1 from './components/Nav1';
import NoMatch from './components/NoMatch';

export default function App() {
  return (
    <div>
        <Nav1/>
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>

     
    </div>
  )
}


