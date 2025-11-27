// Tabs.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { IoArrowForward } from "react-icons/io5";
import "../css/mobile-css/TabsMobile.css";

// --- images (kept same paths you provided) ---
import layer from "../assets/Solutions-images/tabs-section/Res.png";
import gym from "../assets/Solutions-images/tabs-section/gym.png";
import mall from "../assets/Solutions-images/tabs-section/mall.png";
import Library from "../assets/Solutions-images/tabs-section/Library.png";
import Corporate from "../assets/Home-images/Squence-images/locker_01_0350.webp";

// mobile-specific images
import layermb from "../assets/Home-images/Business-images/4.jpeg";
import gymmb from "../assets/Home-images/Business-images/1.jpeg";
import mallmb from "../assets/Home-images/Business-images/3.jpeg";
import Librarymb from "../assets/Home-images/Business-images/2.jpeg";
import Corporatemb from "../assets/Home-images/Squence-images/locker_01_0350.webp";

const slides = [
  {
    title: "Residential",
    desc: "Eliminate Package Theft and provide residents with a secure, 24/7 package amenity.",
    image: layer,
    mobileImage: layermb,
  },
  {
    title: "Corporate Office",
    desc: "Streamline mail & secure deliveries inside office campuses.",
    image: Corporate,
    mobileImage: Corporatemb,
  },
  {
    title: "Library",
    desc: "Automate book hold pickups & returns securely.",
    image: Library,
    mobileImage: Librarymb,
  },
  {
    title: "Malls",
    desc: "Offer shoppers secure pickup & parcel convenience.",
    image: mall,
    mobileImage: mallmb,
  },
  {
    title: "Gym",
    desc: "Securely store personal items & packages for members.",
    image: gym,
    mobileImage: gymmb,
  },
];

// Tabs component (mobile-only stacked sections)
export default function TabsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 800);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // If not mobile, render nothing (component is only for mobile)
  if (!isMobile) return null;

  return (
    <section
      className="tabs-only-mobile only-mobile"
      aria-label="Mobile tabs stacked"
      id="tabs-section-mb"
    >
      {slides.map((s, idx) => (
        <article className="tab-section" key={idx}>
          {/* background image block */}
          <div
            className="tab-image"
            role="img"
            aria-label={s.title}
            style={{ backgroundImage: `url(${s.mobileImage || s.image})` }}
          />

          {/* content block below the image */}
          <div className="tab-content">
            <h2 className="head-text">{s.title}</h2>
            <p className="para-text">{s.desc}</p>

            <div className="tab-cta">
              <Link to="/Products" className="tab-btn">
                Find Your Solution
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
