import React from 'react'
import { useSelector } from "react-redux";
import { moviesTrending } from '../features/movieSlice';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector(moviesTrending)

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="text-white">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  )
}

export default MovieList
