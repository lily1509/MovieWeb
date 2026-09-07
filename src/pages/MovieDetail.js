import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../data/moviesData"; // Import dữ liệu phim từ file riêng
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = moviesData.find((movie) => movie.id === parseInt(id));
    if (foundMovie) {
      foundMovie.views += 1; // Tăng lượt xem mỗi lần mở trang
      setMovie(foundMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Views: {movie.views}</p>
      {movie.videoUrl.includes("youtube.com") ? (
        <iframe
          src={movie.videoUrl}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video controls>
          <source src={movie.videoUrl} type="video/mp4" />
          <track label="English" kind="subtitles" srcLang="en" src={movie.subtitleUrl} default />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default MovieDetail;
