import { NavLink, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Movies from "./Movies";

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
          <Route path="/movies" element={<Movies />}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;