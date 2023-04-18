import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './MainButton.css';

function MainButton({ songSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSong = () => {
    if (audioRef.current) {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        setIsPlaying(true);
        audioRef.current.play();
      }
    }
  };

  return (
    <>
      <button className="main-button" onClick={playSong}>
        {isPlaying ? 'Pausar' : 'Jugar'}
      </button>
      <audio ref={audioRef} src={songSrc} />
    </>
  );
}

MainButton.propTypes = {
  songSrc: PropTypes.string.isRequired,
};

export default MainButton;
