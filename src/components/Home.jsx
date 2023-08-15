import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchTopMovies } from './services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul className="Home">
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                state={{ from: location }}
                className="movies_link"
                to={`/movies/${movie.id}`}>{movie.title || movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
