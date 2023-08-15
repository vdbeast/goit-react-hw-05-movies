import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "./services";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchMovies(query)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type="submit">Search</button>
                </label>
            </form>

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie) => {
                        return (<li key={movie.id}>
                            <NavLink
                                state={{ from: location }}
                                className="movies_link"
                                to={`/movies/${movie.id}`}>{movie.title || movie.name}
                            </NavLink>
                        </li>)
                    })}
                </ul>
            )}

        </div>
    )
}

export default Movies;