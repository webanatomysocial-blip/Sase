import React, { useRef, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import '../css/LockerHome.css';
const imageModules = import.meta.glob('/src/assets/Home-images/Squence-images/locker_01_*.webp', { eager: true });

function LockerHome() {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const lenisRef = useRef(null);
  const totalFrames = 350;
  const animationSectionHeight = 10000; // Height of animation section
  const nextSectionHeight = 1000; // Height of next section (adjust as needed)

  // Function to generate image path
  const getFramePath = (frame) => {
    const paddedFrame = String(frame).padStart(4, '0');
    const module = imageModules[`/src/assets/Home-images/Squence-images/locker_01_${paddedFrame}.webp`];
    return module ? module.default : '';
  };

  // Preload images and set canvas size
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

    // Set canvas size to viewport dimensions
    const firstImage = images.current[1];
    if (firstImage && firstImage.complete) {
      updateCanvasSize();
      drawFrame(1);
    } else if (firstImage) {
      firstImage.onload = () => {
        updateCanvasSize();
        drawFrame(1);
      };
      firstImage.onerror = () => {
        console.error('Failed to load first image:', firstImage.src);
      };
    }
  }, []);

  // Initialize Lenis
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  // Update canvas size to viewport dimensions
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  // Draw frame on canvas with cover effect (prioritize width)
  const drawFrame = (frame) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (images.current[frame] && images.current[frame].complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images.current[frame];
      const imgAspect = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      // Scale image to fill width, crop height if needed
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;

      // If image is too short, scale to height and crop width
      if (drawHeight < canvas.height) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    } else {
      console.warn(`Frame ${frame} not ready or broken`);
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText(`Frame ${frame} not loaded`, 10, 50);
    }
  };

  // Handle scroll event with Lenis
  const handleScroll = React.useCallback(
    ({ scroll }) => {
      const scrollPosition = scroll;
      const maxScroll = animationSectionHeight - window.innerHeight;
      const frame = Math.floor((scrollPosition / maxScroll) * (totalFrames - 1)) + 1;
      const clampedFrame = Math.max(1, Math.min(totalFrames, frame));
      if (clampedFrame !== currentFrame) {
        setCurrentFrame(clampedFrame);
        requestAnimationFrame(() => drawFrame(clampedFrame));
      }
    },
    [currentFrame]
  );

  // Add Lenis scroll listener
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }
    window.addEventListener('resize', () => {
      updateCanvasSize();
      drawFrame(currentFrame);
    });
    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [handleScroll, currentFrame]);

  return (
    <div>
      {/* Animation Section */}
      <div
        className="animation-section"
        style={{ height: `${animationSectionHeight}px`, position: 'relative' }}
      >
        <canvas ref={canvasRef} className="canvas-sticky" />
      </div>
      {/* Next Section */}
      <div
        className="next-section"
        style={{
          height: `${nextSectionHeight}px`,
          background: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#333',
        }}
      >
        <p>Next Section Content (Scroll here after animation)</p>
      </div>
    </div>
  );
}

export default LockerHome;