import { useState, useEffect } from 'react';
import { fetchTrending } from '../Api/api';
import { WrapContainer, Wrap, TitleHome } from './Movies-styled';
import CardDetails from '../components/CardMovieDetails/CardMovieDetails.jsx';


export default function HomePage() {
const [loader, setLoader] = useState(false);
const [error, setError] = useState(false);
const [movies, setMovies] = useState([]);


useEffect(() => {
  const controller = new AbortController();

 async function fetchTrendingController() {
    setLoader(true);

try {
 const response = await fetchTrending({ abortController: controller, });

 setMovies(prevMovies => [...prevMovies, ...response.results]);
}
catch (error){
  error => {
  if (error.code !== 'ERR_CANCELED') {
    console.log(error);
    setError(true)    
  }
}
}
finally {
    setLoader(false)
  setError(false)
}
  }

  fetchTrendingController();

  return () => controller.abort();
}, []);

return (
    <Wrap>
    <WrapContainer>
      <TitleHome>Trending Today</TitleHome>
      <CardDetails arrDetails={movies} />
    </WrapContainer>
    {error && <p>Opps, something with wrong!!! True again!</p>}
    {loader && <p>loader</p>}
    </Wrap>
);
}