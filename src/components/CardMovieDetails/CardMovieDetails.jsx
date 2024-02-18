import { Link, useLocation, } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import { Cards, ListCard, Img, NameMovieHome, } from './CardMovieDetails.js';

const CardDetails = ({ arrDetails }) => {
  const location = useLocation();

    return (
        <Cards>
        {arrDetails && arrDetails.map(({ id, title, poster_path }) => {
          return (
            <ListCard key={id}>
            <Link to={`/movies/${id}`} state={location}>
            {poster_path ? (<Img src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>) :
            (<AiOutlineFileImage size={250} />)
            }
              {title && (
                <NameMovieHome>{title}</NameMovieHome>
              )}
              </Link>
          </ListCard> 
          )
        } )}
          </Cards>
    )
}

export default CardDetails;