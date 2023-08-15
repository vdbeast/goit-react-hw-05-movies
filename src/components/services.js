import axios from "axios";

export const fetchTopMovies = () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWI4ZTQwY2IwYzE0ODE4N2E0M2I1MzA5YTY1MjczNyIsInN1YiI6IjY0ZDkyZDhmYjc3ZDRiMDExYzMzMTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yc5irU_pe1wJRFUMUb6iMewGOYynwCuXi9xlSumNeFI'
        }
    };

    return axios.request(options);
};

export const fetchSearchMovies = (query) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { include_adult: 'false', language: 'en-US', page: '1',  query: query },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWI4ZTQwY2IwYzE0ODE4N2E0M2I1MzA5YTY1MjczNyIsInN1YiI6IjY0ZDkyZDhmYjc3ZDRiMDExYzMzMTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yc5irU_pe1wJRFUMUb6iMewGOYynwCuXi9xlSumNeFI'
        }
    };

    return axios.request(options);
};

export const fetchMovieDetails = (movieId) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}`,
        params: { language: 'en-US' }, 
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWI4ZTQwY2IwYzE0ODE4N2E0M2I1MzA5YTY1MjczNyIsInN1YiI6IjY0ZDkyZDhmYjc3ZDRiMDExYzMzMTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yc5irU_pe1wJRFUMUb6iMewGOYynwCuXi9xlSumNeFI'
        }
    };
    
    return axios.request(options);
};

export const fetchMovieCredits = (movieId) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWI4ZTQwY2IwYzE0ODE4N2E0M2I1MzA5YTY1MjczNyIsInN1YiI6IjY0ZDkyZDhmYjc3ZDRiMDExYzMzMTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yc5irU_pe1wJRFUMUb6iMewGOYynwCuXi9xlSumNeFI'
        }
    };
    
    return axios.request(options);
};

export const fetchMovieReviews = (movieId) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWI4ZTQwY2IwYzE0ODE4N2E0M2I1MzA5YTY1MjczNyIsInN1YiI6IjY0ZDkyZDhmYjc3ZDRiMDExYzMzMTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yc5irU_pe1wJRFUMUb6iMewGOYynwCuXi9xlSumNeFI'
  }
    };
    
    return axios.request(options);
}