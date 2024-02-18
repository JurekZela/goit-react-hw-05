import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Api/api';
import { ReviewsCard } from './ReviewsCard-styled';

const ReviewsCards = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        async function searchReviews() {
            try {
               fetchReviews(movieId).then(({ results }) => {
                setReviews(results);
               })

            } catch (error) {
                console.log(error);
            }
        }

        searchReviews();
    
      
    }, [movieId])

    return (
         <div>
            {reviews ? (
            <ReviewsCard>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ReviewsCard>) : (
            <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>)
            }
        </div>
    )
};

export default ReviewsCards;