import React, { useEffect, useState } from "react";
import { fetchMovieReviews } from './services';
import { useParams } from 'react-router-dom';

const Review = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then((response) => {
                setReviews(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching movie reviews:', error);
            });
    }, [movieId]);

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;