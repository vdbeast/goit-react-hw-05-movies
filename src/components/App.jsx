import { NavLink, Routes, Route } from "react-router-dom";
import React, {lazy, Suspense} from "react";

const Home = lazy(() => import("./Home"));
const Movies = lazy(() => import("./Movies"));
const MovieDetails = lazy(() => import("./MovieDetails"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;