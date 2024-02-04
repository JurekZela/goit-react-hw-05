// import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
<div>
  <Routes>
    <Route path="/" element={<div>Home</div>}/>
    <Route path="/movies" element={<div>Movies</div>}/>
  </Routes>
</div>
  )
}

export default App