import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "./services";
import PropTypes from "prop-types"; 

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryString = searchParams.get('query');

    useEffect(() => {
        if (queryString) {
            fetchSearchMovies(queryString)
                .then((response) => {
                    setMovies(response.data.results);
                })
                .catch(error => {
                    console.error('Error fetching movies:', error);
                });
        }
    }, [queryString]);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const searchValue = event.currentTarget.elements.searchValue.value;

        setSearchParams({
            query: searchValue
        });
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="movie_search_input" type="text" name="searchValue" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button className="movie_search_btn" type="submit">Search</button>
                </label>
            </form>

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie) => {
                        return (<li key={movie.id}>
                            <NavLink
                                state={{ from: location, searchQuery: queryString }}
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

Movies.propTypes = {
    query: PropTypes.string
};

export default Movies;
