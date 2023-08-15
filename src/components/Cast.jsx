import React, { useEffect, useState } from "react";
import { fetchMovieCredits } from './services';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
    fetchMovieCredits(movieId)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
    }, [movieId]);
    
    return (
        <div>
            <h2>Cast</h2>
            {cast && cast.length > 0 && (
                <ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <div className="cast_wrapper">
                                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} width="100px" height="150px"/>
                                <h3 className="actor_title">{actor.name}</h3>
                                <p className="actor_desc">Character: {actor.character}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cast;