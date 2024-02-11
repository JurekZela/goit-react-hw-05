import { useParams } from "react-router-dom";
import  ComeBack from '../components/ComeBack/ComeBackBtn';
import { fetchMovieDetails } from '../Api/api';
import { useEffect, useState } from "react";

const CardDetails = () => {
    const [ movieDetails, setMovieDetails] = useState([]);

    const currentParams = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDetails() {
            try {
            const response = await fetchMovieDetails({ movieId: currentParams.moviesId, controller });
            console.log(response);
            setMovieDetails()
            console.log(movieDetails);
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                    console.log(error);
                }
            }
            
        }
        fetchDetails();

        return () => controller.abort();
    })

    return <div> 
        <ComeBack />
        {movieDetails.length > 0 && (
               <div>
               <img src={movieDetails.poster_path} width="500" height="500"/>
           </div>
        )}
        </div>
};

export default CardDetails;