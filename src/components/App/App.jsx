// import { useState } from 'react'
import {Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../../pages/HomePage.jsx';
import MoviesPage from '../../pages/MoviesPage.jsx';
import './App.css'

function App() {

  return (
<div>
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
  </Routes>
</div>
  )
}

export default App