import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import '../css/Video-component.css';
import videoPlaceholder from '../assets/Home-images/videos/privew-img.jpg';
import videoSource from '../assets/Home-images/videos/animated-video.mp4';

const VideoComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.error('Playback failed:', error);
      });
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <section
      className="video-container"
      style={{
        background: props.background,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        marginBottom: props.marginBottom
      }}
    >
      <div className="video-content">
        <div className="video-left-content">
          <h5 className="head-text" style={{ color: props.color }}>
            See how SASE’s intelligent locker systems redefine convenience and control.
            Watch our demo to discover how seamless automation and robust security come together
            to make every delivery effortless.
          </h5>
        </div>

        <div className="video-right-content">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={props.video || videoSource}  // Fallback to local video
              poster={videoPlaceholder}
              className="demo-video"
              loop
              muted
              playsInline
              style={{ objectFit: props.objectFit || 'cover' }}
            />

            <button
              className="play-pause-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  togglePlayPause();
                }
              }}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}

            </button>

          </div>

          <div
            className="video-name-text"
            style={{ display: isPlaying ? "none" : "block" }}
          >
            <p className="para-text-white">Click To Experience The Demo</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoComponent;