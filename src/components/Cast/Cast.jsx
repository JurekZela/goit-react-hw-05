import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import { fetchCast } from '../../Api/api';
import { CastContainer, CastCard, Paragraf, } from './Cast-styled';

const MovieCast = () => {
    const [cast, setCast] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
      async function searchCast() {
        try {
           fetchCast(movieId).then(({ cast }) => {
            setCast(cast)
           })           

        } catch (error) {
            console.log(error);
        }
      }
      searchCast();
    }, [movieId])

    console.log(cast);

    return (
        <>
            <CastContainer>
                {cast && (
                    cast.map(({ id, name, profile_path, character, }) => (
                        <CastCard key={id}>
                        {profile_path ?  (<img src={`https://image.tmdb.org/t/p/w200${profile_path}`} />) :
                        (<AiOutlineFileImage size={250} />)}
                        <Paragraf>{name}</Paragraf>
                        <Paragraf>Character: {character}</Paragraf>
                    </CastCard>
                    ))
                )}
            </CastContainer>
        </>
    )
};

export default MovieCast;