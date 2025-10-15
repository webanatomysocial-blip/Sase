import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import LockerHome from '../components/LockerHome';
import '../css/index.css';

function Home() {
  const lenisRef = useRef(null);

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

  return (
    <div>
      <LockerHome lenis={lenisRef.current} />
    </div>
  );
}

export default Home;