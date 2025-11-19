// components/VideoLoader.jsx
import { useState, useEffect, useRef } from 'react';
import loaderVideo from '../assets/loader.mp4';
import '../css/loader.css';

export default function VideoLoader() {
  const [isLoading, setIsLoading] = useState(true);
  // const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef(null);

  // Check if user already saw the loader this session
  useEffect(() => {
    const seenLoader = sessionStorage.getItem('hasSeenLoader');
    if (seenLoader) {
      setIsLoading(false);
      return;
    }

    // Mark as seen immediately (even before video ends)
    sessionStorage.setItem('hasSeenLoader', 'true');
  }, []);

  const hideLoader = () => {
    setIsLoading(false);
  };

  // Wait for video to play through OR page to finish loading
  useEffect(() => {
    if (!isLoading) return;

    let isMounted = true;
    let timeoutId;

    const finishLoading = () => {
      if (!isMounted) return;
      hideLoader();
    };

    // Option 1: Video ended → hide
    const handleVideoEnd = () => {
      console.log('Video ended → hiding loader');
      finishLoading();
    };

    // Option 2: Fallback timer (max 12s)
    timeoutId = setTimeout(() => {
      console.warn('Loader timeout → hiding');
      finishLoading();
    }, 12000);

    // Option 3: Wait for main page assets (images, fonts, etc.)
    if (document.readyState === 'complete') {
      // Page already loaded (e.g. from cache)
      setTimeout(finishLoading, 500); // small delay for style
    } else {
      const onLoad = () => {
        console.log('Page fully loaded → can hide loader soon');
        // Wait a bit longer for video to have impact
        setTimeout(finishLoading, 800);
      };
      window.addEventListener('load', onLoad);

      // Cleanup
      return () => {
        window.removeEventListener('load', onLoad);
        clearTimeout(timeoutId);
        isMounted = false;
      };
    }

    // Video event listeners
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      video.play().catch(() => {
        // Autoplay blocked? Hide after short delay
        setTimeout(finishLoading, 1500);
      });
    }

    return () => {
      if (video) video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(timeoutId);
      isMounted = false;
    };
  }, [isLoading]);

  // If already seen OR not loading → don't render
  if (!isLoading || sessionStorage.getItem('hasSeenLoader')) {
    return null;
  }

  return (
    <div className={`video-loader ${!isLoading ? 'fade-out' : ''}`}>
      <video
        ref={videoRef}
        src={loaderVideo}
        muted
        playsInline
        autoPlay
        preload="auto"
        className="loader-video"
      />
    </div>
  );
}