import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import moviesData from "../data/moviesData"; // Import dữ liệu phim

const MovieListPage = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (genre) {
      setMovies(moviesData.filter((movie) => movie.genre === genre));
    } else {
      setMovies(moviesData);
    }
  }, [genre]);

  return (
    <div className="movie-list-page">
      <h1>{genre ? `${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies` : "All Movies"}</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListPage;
