import { NavLink, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <NavLink className="header_link" to="/">Home</NavLink>
          <NavLink className="header_link" to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;