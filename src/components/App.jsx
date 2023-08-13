import { NavLink } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <NavLink className="header_link" to="/">Home</NavLink>
          <NavLink className="header_link" to="/movies">Movies</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default App;