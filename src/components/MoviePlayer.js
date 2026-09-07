import React, { useState, useRef } from 'react';

const MoviePlayer = ({ movie }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubtitleOn, setIsSubtitleOn] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(1);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleSubtitle = () => {
    setIsSubtitleOn(!isSubtitleOn);
  };

  const handleSpeedChange = (e) => {
    setPlaybackSpeed(e.target.value);
    videoRef.current.playbackRate = e.target.value;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className="movie-player">
      <video ref={videoRef} src={movie.videoUrl} controls>
        {isSubtitleOn && (
          <track src={movie.subtitleUrl} kind="subtitles" />
        )}
      </video>

      <div className="controls">
        <button onClick={toggleFullscreen}>
          {isFullscreen ? 'Thu nhỏ' : 'Phóng to'}
        </button>
        <button onClick={toggleSubtitle}>
          {isSubtitleOn ? 'Tắt phụ đề' : 'Bật phụ đề'}
        </button>
        <label>
          Tốc độ phát:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={playbackSpeed}
            onChange={handleSpeedChange}
          />
        </label>
        <label>
          Âm lượng:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>
    </div>
  );
};

export default MoviePlayer;
