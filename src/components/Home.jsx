import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchTopMovies } from './services';
import PropTypes from "prop-types";

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

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default Home;
