import { Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import  ComeBack from '../../components/ComeBack/ComeBackBtn';
import { fetchMovieDetails } from '../../Api/api';
import { useEffect, useState } from "react";
import { Img, WrapContainer, Wrap, DetailsContainer } from './MovieDetailsPage-styled';
import MovieCastPages from '../Reviews/CastPages/CastPages';
import MovieReviews from '../Reviews/Reviews';

const CardDetails = () => {
    const { movieId } = useParams();
    const [ movieDetails, setMovieDetails] = useState({})

    const location = useLocation();
    const locationRef = useRef(location.state)
    

    useEffect(() => {
        async function fetchDetails() {
            try {
            const response = await fetchMovieDetails(movieId);

            setMovieDetails(response)
            
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                    console.log(error);
                }
            }
            
        }

        fetchDetails();
    }, [movieId]);

    const  { poster_path, title, genres, overview, release_date,
        vote_average, } = movieDetails;

    return (
        <div> 
        <ComeBack backLink={locationRef.current ?? '/'} />
        {movieDetails && (
            <Wrap>
                <WrapContainer>
                    <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </WrapContainer>
                <DetailsContainer>
               <p>{title}</p>            
               <p>Release: {release_date}</p>
               <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
               <p>Overview: </p>
               <p>{overview}</p>
               <p>Genres: </p>
               {genres &&  (<p>{genres.map(({ name }) => name).join(', ')}</p>)}
           </DetailsContainer>
            </Wrap>
        )}
        <div>
            <p>Additional Information:</p>
            <MovieCastPages  />
            <MovieReviews />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
        </div>
    )
};

export default CardDetails;