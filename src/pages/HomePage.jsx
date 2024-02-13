import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../Api/api';
import { WrapContainer, Cards, ListCard, Img, Wrap, NameMovieHome, TitleHome } from './Movies-styled';

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
 console.log(response);

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
      <Cards>
    {movies.length > 0 && movies.map(({ id, title, poster_path }) => ( 
    <ListCard key={id}>
      <Link to={`/movies/${id}`}>
      <Img src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
        {title && (
          <NameMovieHome>{title}</NameMovieHome>
        )}
        </Link>
    </ListCard> ) )}
      </Cards>
    </WrapContainer>
    {error && <p>Opps, something with wrong!!! True again!</p>}
    {loader && <p>loader</p>}
    </Wrap>
);
}