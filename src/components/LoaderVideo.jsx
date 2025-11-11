import { useState, useEffect, useRef } from 'react';
import loaderVideo from '../assets/loader.mp4';
import '../css/loader.css';

export default function VideoLoader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  const hideLoader = () => {
    setFade(true);
    setTimeout(() => setShow(false), 600);
  };

  // DEBUG: Log when video starts/fails
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => console.log('Video STARTED playing');
    const onError = (e) => {
      console.error('VIDEO FAILED TO LOAD:', e);
      console.error('Check path: src/assets/loader.mp4');
      hideLoader(); // fallback
    };
    const onEnded = () => {
      console.log('Video ENDED');
      hideLoader();
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('error', onError);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('error', onError);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  // Fallback: 12 seconds max
  useEffect(() => {
    const timer = setTimeout(() => {
      console.warn('Video took too long → hiding loader');
      hideLoader();
    }, 12_000);
    return () => clearTimeout(timer);
  }, []);

  // SKIP sessionStorage for now (REMOVE LATER)
  // useEffect(() => {
  //   if (sessionStorage.getItem('loaderSeen')) hideLoader();
  //   else sessionStorage.setItem('loaderSeen', '1');
  // }, []);

  if (!show) return null;

  return (
    <div className={`video-loader ${fade ? 'fade-out' : ''}`}>
      <video
        ref={videoRef}
        src={loaderVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        // Force play attempt
        onCanPlay={() => videoRef.current?.play().catch(() => {})}
      />

    </div>
  );
}