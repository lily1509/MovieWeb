import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-thumbnail">
        <img 
          src={movie.image || 'https://via.placeholder.com/150'} 
          alt={movie.title || 'No title'} 
          onError={(e) => (e.target.src = 'https://via.placeholder.com/150')} 
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">
          {movie.title || 'Untitled'}
        </h3>
        <p className="movie-description">
          {movie.description ? 
            movie.description.length > 100 
              ? `${movie.description.substring(0, 100)}...` 
              : movie.description 
            : 'No description available.'}
        </p>
        <p className="movie-views">
          {movie.views ? `${movie.views} views` : 'No views yet'}
        </p>
        <Link to={`/movie/${movie.id || ''}`} className="movie-link">
          <button className="btn-view">Watch Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
