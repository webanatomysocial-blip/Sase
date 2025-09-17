import React, { useRef, useEffect } from 'react';
import '../css/LockerHome.css';
// import img1 from '../assets/Home-images/Squence-images/locker_01_0001.png';

// Dynamically import all images
const imageModules = import.meta.glob('/src/assets/Home-images/Squence-images/locker_01_*.png', { eager: true });

function LockerHome() {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const totalFrames = 350;

  // Function to generate image path
  const getFramePath = (frame) => {
    const paddedFrame = String(frame).padStart(4, '0');
    const module = imageModules[`/src/assets/Home-images/Squence-images/locker_01_${paddedFrame}.png`];
    return module ? module.default : '';
  };

  // Preload images
  useEffect(() => {
    images.current = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const src = getFramePath(i);
      if (src) {
        img.src = src;
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
        };
        images.current[i] = img;
      } else {
        console.error(`Image path not found for frame ${i}`);
      }
    }

    // Set canvas size based on first image
    const firstImage = images.current[1];
    if (firstImage && firstImage.complete) {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = firstImage.width;
        canvas.height = firstImage.height;
        drawFrame(1);
      }
    } else if (firstImage) {
      firstImage.onload = () => {
        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = firstImage.width;
          canvas.height = firstImage.height;
          drawFrame(1);
        }
      };
      firstImage.onerror = () => {
        console.error('Failed to load first image:', firstImage.src);
      };
    }
  }, []);

  // Draw frame on canvas
  const drawFrame = (frame) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (images.current[frame] && images.current[frame].complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images.current[frame], 0, 0, canvas.width, canvas.height);
    } else {
      console.warn(`Frame ${frame} not ready or broken`);
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText(`Frame ${frame} not loaded`, 10, 50);
    }
  };

  // Handle scroll event
  const handleScroll = React.useCallback(() => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const frame = Math.floor((scrollPosition / maxScroll) * (totalFrames - 1)) + 5;
    const clampedFrame = Math.max(1, Math.min(totalFrames, frame));
    drawFrame(clampedFrame);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ height: '20000px', margin: 0, overflowX: 'hidden' }}>
      <canvas
        ref={canvasRef}
      />
    </div>
  );
}

export default LockerHome;