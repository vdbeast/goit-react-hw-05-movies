import { NavLink } from "react-router-dom";
import React from "react";
import Home from "./Home";

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
        <section>
          <Home>Movies List</Home>
        </section>
      </main>
    </div>
  );
};

export default App;