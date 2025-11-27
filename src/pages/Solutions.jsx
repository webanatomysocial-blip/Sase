// src/pages/Solutions.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import "../css/Solutions.css";
import HeroImg from "../assets/Solutions-images/Banner1.png";
import HeroImg2 from "../assets/Home-images/Why-Choose-images/2.png";
import FAQ from "../components/FAQ.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import VideoComponent from "../components/Video-comp.jsx";
import Video from "../assets/Solutions-images/Sase-22.mp4";
import Tabs from "../components/Tabs-section.jsx";
import TabsMobile from "../components/Tab-section-mobile.jsx";
import AdvancedTechnology from "../components/Advanced-Technology.jsx";

const Solutions = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's no hash, do nothing
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    // Try to find element now, then keep retrying for a short period in case it's rendered later.
    let attempts = 0;
    const maxAttempts = 40; // ~ 2 seconds if interval is 50ms
    const retryInterval = 50;

    const tryScroll = () => {
      // first try by id, then by name selector (some components use name), then data-id
      const el =
        document.getElementById(id) ||
        document.querySelector(`[name="${id}"]`) ||
        document.querySelector(`[data-id="${id}"]`);

      if (el) {
        // scrollIntoView with smooth behaviour
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (e) {
          // fallback for older browsers
          const top = e.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        clearInterval(interval);
      } else {
        attempts += 1;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }
    };

    // First attempt on next painting frame (gives React a tick to render)
    window.requestAnimationFrame(tryScroll);
    // Then set interval to retry (useful if Tabs or section renders after async work)
    const interval = setInterval(tryScroll, retryInterval);

    // cleanup
    return () => clearInterval(interval);
  }, [location]); // run whenever location (path or hash) changes

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <div className="locker-solution-hero-section">
        <div className="locker-solution-left">
          <div className="locker-hero-section-contents">
            <h1 className="head-text">
              Optimized Delivery and Asset Management for Every Environment.
            </h1>
            <p className="para-text">
              Explore how our secure, cloud-connected locker systems are
              transforming package handling, asset control, and convenience
              across diverse sectors.
            </p>
          </div>

          <div className="cta-wrapper-left">
            <Link to="/contact" className="find-btn">
              Find Your Solution <IoArrowForward className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="locker-solution-right">
          <img className="locker-solution-hero-image" src={HeroImg} alt="" />
        </div>
      </div>

      {/* Make sure Tabs receives the id prop and uses it on a top-level element: */}
      <Tabs autoplay={true} autoplayInterval={6000} id="tabs-section" />
      <TabsMobile />

      {/* CAROUSEL SECTION mobile */}
      <section className="locker-solution-carousel-section-mobile only-mobile "></section>

      <VideoComponent
        background="black"
        color="white"
        paddingTop="100px"
        paddingBottom="100px"
        video={Video}
        objectFit="contain"
      />

      <AdvancedTechnology />

      {/* BOTTOM SECTION */}
      <div className="locker-smart-section-last-section">
        <div className="locker-smart-left">
          <div className="locker-smart-section-contents">
            <h1 className="head-text">
              The Smart Choice for Your Next Project
            </h1>
            <p className="para-text">
              Let our experts help you scope, design, and implement the perfect
              locker system for your space and budget.
            </p>
          </div>

          <div className="cta-wrapper-left">
            <Link to="/contact" className="find-btn">
              Find Your Solution <IoArrowForward className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="locker-smart-right">
          <img className="locker-solution-smart-img2" src={HeroImg2} alt="" />
        </div>
      </div>

      <FAQ background="#ffffff" />

      <Footer />
    </>
  );
};

export default Solutions;
