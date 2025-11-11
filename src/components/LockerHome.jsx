import React, { useRef, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import '../css/LockerHome.css';
import { SlArrowDown } from 'react-icons/sl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import arrow from '../assets/Home-images/Extra-images/arrow.gif';
import VariableProximity from './VariableProximity';


gsap.registerPlugin(ScrollTrigger);

function LockerHome() {
  const buttonRef = useRef(null);
  // const bannertextRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const lenisRef = useRef(null);
  const totalFrames = 350;
  const animationSectionHeight = 3500;
  // const aboutUsSectionRef = useRef(null);
  const homeoverlay = useRef(null);

  // Generate image path
  const imageModules = import.meta.glob('/src/assets/Home-images/Squence-images/locker_01_*.webp', { eager: true });
  const getFramePath = (frame) => {
    const paddedFrame = String(frame).padStart(4, '0');
    const module = imageModules[`/src/assets/Home-images/Squence-images/locker_01_${paddedFrame}.webp`];
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
        images.current[i] = img;
      }
    }

    const firstImage = images.current[1];
    if (firstImage && firstImage.complete) {
      updateCanvasSize();
      drawFrame(1);
    } else if (firstImage) {
      firstImage.onload = () => {
        updateCanvasSize();
        drawFrame(1);
      };
    }
  },);

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

    return () => lenisRef.current?.destroy();
  }, []);

  // Canvas functions
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const drawFrame = (frame) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.current[frame]?.complete) return;

    const ctx = canvas.getContext('2d');
    const img = images.current[frame];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgAspect = img.width / img.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.width / imgAspect;
    let offsetX = 0;
    let offsetY = (canvas.height - drawHeight) / 2;

    if (drawHeight < canvas.height) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle scroll with Lenis
  const handleScroll = React.useCallback(
    ({ scroll }) => {
      const maxScroll = animationSectionHeight - window.innerHeight;
      const frame = Math.floor((scroll / maxScroll) * (totalFrames - 1)) + 1;
      const clampedFrame = Math.max(1, Math.min(totalFrames, frame));

      if (clampedFrame !== currentFrame) {
        setCurrentFrame(clampedFrame);
        requestAnimationFrame(() => drawFrame(clampedFrame));
      }
    },
    [currentFrame]
  );

  // Lenis scroll listener + resize
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.on('scroll', handleScroll);

    const handleResize = () => {
      updateCanvasSize();
      drawFrame(currentFrame);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (lenis) lenis.off('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, currentFrame]);

  // GSAP Animations
  useGSAP(() => {
    // 1. BUTTON FADES OUT ON SCROLL DOWN (existing)
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      onUpdate: (self) => {
        gsap.to(buttonRef.current, {
          opacity: self.progress > 0 ? 0 : 1,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.to(containerRef.current, {
          opacity: self.progress > 0 ? 0 : 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      },
    });

    // 2. NEW: Fade overlay to black when About section enters
    const aboutSection = document.querySelector('.about-us-section');
    const overlay = homeoverlay.current;

    if (aboutSection && overlay) {
      gsap.to(overlay, {
        backgroundColor: '#F9F5F0', // solid black
        ease: 'none',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 100%',
          end: 'top 40%',
          scrub: true,
          // markers: true,
        },
      });
    }
  }, [homeoverlay]); // re-run if ref changes



  const containerRef = useRef(null);




  return (
    <>
      {/* ANIMATION SECTION */}
      <div className="animation-section only-windows " style={{ height: `${animationSectionHeight}px`, position: 'relative' }}>
        <div className="home-banner-overlay" ref={homeoverlay}></div>
        <canvas ref={canvasRef} className="canvas-sticky" />
        <a ref={buttonRef} className="scroll-button" style={{ color: 'white' }}>
          Dive Down  <span><img src={arrow} alt="" /></span>
        </a>

        {/* <h1 ref={bannertextRef} className="big-head-text-white head-top-go">"Simplify logistics, <br /> secure deliveries, and empower your <br /> property with SASE."</h1> */}

        <div className='head-top-go'
          ref={containerRef}
        >
          <VariableProximity
            label={' "Simplify logistics, secure deliveries, and empower your property with SASE." '}
            className={' head-top-go big-head-text-white'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </div>
      </div>

      {/* ABOUT US SECTION */}
      {/* <AboutSection ref={aboutUsSectionRef} /> */}
    </>
  );
}

export default LockerHome;