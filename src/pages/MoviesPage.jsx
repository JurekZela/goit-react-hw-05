import { useEffect, useState  } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import  ComeBack  from '../components/ComeBack/ComeBackBtn'; 
import { fetchSearchMovies } from '../Api/api';
import  SearchForm from '../components/SearchForm/SearchForm';
import { List, Li, TitleMovie } from './Movies-styled';

export default function MoviesPage() {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);

    const [params, setParams] = useSearchParams();
    const searchParams = params.get('searchParams') ?? '';

    const changeSearchParams = newParams => {
        params.set('searchParams', newParams);
        setParams(params);
        console.log(params);
    };
    
    useEffect(() => {
        setError(false);

        async function fetchSearch(){
            try {
                const searchMovie = params.get('searchParams') ?? '';

                const response = await fetchSearchMovies(searchMovie);
                setMovie(response.results);
                console.log(response);
                
            } catch (error) {
                setError(true);
                console.log(error);
            }
        }

        fetchSearch();
        
    }, [params])

    return( <div>  
        <ComeBack />
<SearchForm value={searchParams} onChange={changeSearchParams} />
<List>{movie.length > 0 && movie.map(({ poster_path, id, original_title }) => 
(<Li key={id}>
{poster_path ? (
        <img width={250} height={250} 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
) : (
    <AiOutlineFileImage size={250} />
)}
    <TitleMovie>{original_title}</TitleMovie>
    </Li>))}
    </List>
{error & <div>Opps, something with wrong, try again!</div>}
    </div>)
}