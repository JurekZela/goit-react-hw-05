// import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage.jsx';
import MoviesPage from '../../pages/MoviesPage.jsx';
import Error from '../../pages/Error.jsx';
import  Navbar  from '../NavBar/Navbar.jsx';
import CardDetails from '../../pages/MoviesDetailsPage.jsx';




const App = () => {
  return (
<div>
<Navbar />
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/movies" element={<MoviesPage />} />
<Route path="/movies/:moviesId" element={< CardDetails />} />
<Route path="*" element={<Error />} />
</Routes>
</div>
  )
}

export default App;