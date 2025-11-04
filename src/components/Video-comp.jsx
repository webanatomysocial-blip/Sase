import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import '../css/Video-component.css';
import videoPlaceholder from '../assets/Home-images/videos/privew-img.jpg';
import videoSource from '../assets/Home-images/videos/animated-video.mp4'; // Replace with actual video file

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch((error) => console.error('Playback failed:', error));
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error toggling play/pause:', error);
      }
    }
  };

  return (
    <section className="video-container ">
      <div className="video-content">
        <div className="video-left-content">
          <h5 className="head-text">
           See how SASE’s intelligent locker systems redefine convenience and control. Watch our demo to discover how seamless automation and robust security come together to make every delivery effortless.
          </h5>
        </div>

        <div className="video-right-content">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={videoSource}
              poster={videoPlaceholder}
              className="demo-video"
              loop
              muted
              onError={() => console.error('Video failed to load')}
            />
            <button
              className="play-pause-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? togglePlayPause() : null}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;