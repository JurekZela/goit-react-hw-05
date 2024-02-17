import { useEffect, useState  } from 'react';
import { useSearchParams } from 'react-router-dom';
import  ComeBack  from '../components/ComeBack/ComeBackBtn'; 
import { fetchSearchMovies } from '../Api/api';
import  SearchForm from '../components/SearchForm/SearchForm';
import CardDetails from '../components/CardMovieDetails/CardMovieDetails.jsx';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);    

    const [params, setParams] = useSearchParams();   

    const changeSearchParams = newParams => {
        params.set('searchParams', newParams);
        setParams(params);
    };

    const searchParams = params.get('searchParams') ?? '';

    useEffect(() => {
        setError(false);

        async function fetchSearch(){
            try {
                if (!searchParams) return;

                const response = await fetchSearchMovies(searchParams);
                setMovies(response.results);            
                
            } catch (error) {
                setError(true);
                console.log(error);
            }
        }
        
        fetchSearch();
        
    }, [searchParams])

    console.log(movies);

    return( 
    <>  
        <ComeBack />
<SearchForm value={searchParams} onChange={changeSearchParams} />
<CardDetails arrDetails={movies} />
{error & <div>Opps, something with wrong, try again!</div>}
    </>)
}