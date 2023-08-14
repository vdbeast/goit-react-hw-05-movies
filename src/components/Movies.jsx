import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchSearchMovies } from "./services";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

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
                            <NavLink>{movie.original_title}</NavLink>
                        </li>)
                    })}
                </ul>
            )}

        </div>
    )
}

export default Movies;