import React, { useEffect, useState } from "react";
import { fetchMovieReviews } from './services';
import { useParams } from 'react-router-dom';

const Review = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then((response) => {
                setReviews(response.data.results);
                setReviewsLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching movie reviews:', error);
            });
    }, [movieId]);

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviewsLoaded && reviews.length === 0 && <p>We don`t have any reviews for this movie</p>}
                {reviews.map(review => (
                    <li key={review.id}>
                        <b>Author: {review.author}</b>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;