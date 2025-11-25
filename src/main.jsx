// src/main.jsx
import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LockerRoute from './components/LockerRoute'; 
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import './css/index.css';
import Lenis from '@studio-freight/lenis';
// import AboutSection from '../src/components/About-section.jsx';
import Solutions from './pages/Solutions.jsx';
import Contact from './pages/Contact.jsx';
import VideoLoader from './components/LoaderVideo.jsx';   // ← NEW
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
// import VideoLoader from './components/VideoLoader';   // ← NEW
import './css/loader.css';                           // ← NEW (or put in index.css)
// import HandleHashScroll from './components/HandleHashScroll.jsx';

// Global Lenis initialization
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Loader is rendered **outside** the router but still inside root */}
      <VideoLoader />
      <ScrollToTop />
      {/* <HandleHashScroll /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);