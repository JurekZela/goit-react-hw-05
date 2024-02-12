import { useEffect, useState  } from 'react';
import { useSearchParams } from 'react-router-dom';
import  ComeBack  from '../components/ComeBack/ComeBackBtn'; 
import { fetchSearchMovies } from '../Api/api';
import  SearchForm from '../components/SearchForm/SearchForm';

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
                const response = await fetchSearchMovies(params.get('searchParams'));
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
<ul>{movie & (movie.map(({ poster_path, }) => {<li><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} /></li>}))}</ul>
{error & <div>Opps, something with wrong, try again!</div>}
    </div>)
}