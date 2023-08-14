import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchTopMovies } from './services';

const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetchTopMovies()
      .then((response) => {
        setTitles(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      {titles.length > 0 && (
        <ul className="Home">
          {titles.map((title) => (
              <li key={title.id}>
                  <NavLink className="movies_link">{title.title}</NavLink>
              </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
