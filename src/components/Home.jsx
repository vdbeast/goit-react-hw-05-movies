import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchTopMovies } from './services';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <ul className="Home">
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink className="movies_link" to={`/movies/${movie.id}`}>{movie.title || movie.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
