import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import { fetchMovieDetails } from './services'
import { useLocation, useParams, Link, Routes, Route } from 'react-router-dom';

const Cast = lazy(() => import("./Cast"));
const Review = lazy(() => import("./Reviews"));

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? "/");

    useEffect(() => {
    fetchMovieDetails(movieId)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, [movieId]);
    
    return (
        <div>
            {movieDetails && (
                <div>
                    <div>
                        <Link className="go-back-link" to={backLinkHref.current}>{"<-- Go Back"}</Link>
                    </div>
                    <div className="movie_details_container">
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} width="350px" height="500px"/>
                    <div className="movie_details_desc">
                        <h2>{movieDetails.title}</h2>
                        <p>Release date: {movieDetails.release_date}</p>
                        <h3>Overview:</h3>
                        <p>{movieDetails.overview}</p>
                        <b>Vote average: {movieDetails.vote_average}</b>
                    </div>
                    </div>
                    <div>
                        <h2>Additional information</h2>
                        <ul>
                            <li>
                                <Link to="cast">Cast</Link> 
                            </li>
                            <li>
                                <Link to="reviews">Review</Link>
                            </li>
                        </ul> 
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="cast" element={<Cast/>} />
                            <Route path="reviews" element={<Review/> } />
                        </Routes>
                    </Suspense>
                </div>
            )}
        </div>
    )
}

export default MovieDetails;
