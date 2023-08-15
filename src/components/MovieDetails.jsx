import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from './services'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [ movieDetails, setMovieDetails ] = useState(null);

    useEffect(() => {
    fetchMovieDetails(movieId)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, [movieId]);
    
    return (
        <div>
            {movieDetails && (
                <div className="movie_details_container">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
                    <div className="movie_details_desc">
                        <h2>{movieDetails.title}</h2>
                        <p>Release date: {movieDetails.release_date}</p>
                        <h3>Overview:</h3>
                        <p>{movieDetails.overview}</p>
                        <b>Vote average: {movieDetails.vote_average}</b>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetails;