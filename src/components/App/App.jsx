import { lazy, Suspense } from 'react';
import {Routes, Route, } from 'react-router-dom';
// import HomePage from '../../pages/HomePage.jsx';
// import MoviesPage from '../../pages/MoviesPage.jsx';
import Error from '../../pages/Error.jsx';
import  Navbar  from '../NavBar/Navbar.jsx';
// import CardDetails from '../../pages/MovieDetails/MoviesDetailsPage.jsx';
// import ReviewsCards from '../ReviewsCard/ReviewsCard.jsx';
// import MovieCast from '../Cast/Cast.jsx';


const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage.jsx'));
const CardDetails = lazy(() => import('../../pages/MovieDetails/MoviesDetailsPage.jsx'));
const MovieCast = lazy(() => import('../Cast/Cast.jsx'));
const ReviewsCards = lazy(() => import('../ReviewsCard/ReviewsCard.jsx'));


const App = () => {

  return (
<div>
<Navbar />
<Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/movies" element={<MoviesPage />} />
<Route path="/movies/:movieId" element={< CardDetails />} >
  <Route path="cast" element={<MovieCast />} />
  <Route path="reviews" element={<ReviewsCards />} />
</Route>
<Route path="*" element={<Error />} />
</Routes>
</Suspense>
</div>
  )
}

export default App;