import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <MovieCard movie={movie} />
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
