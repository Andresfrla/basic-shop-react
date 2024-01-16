import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
