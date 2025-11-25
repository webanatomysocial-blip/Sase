// src/components/Tabs.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import layer from '../assets/Solutions-images/tabs-section/Res.png';
import gym from '../assets/Solutions-images/tabs-section/gym.png';
import mall from '../assets/Solutions-images/tabs-section/mall.png';
import Library from '../assets/Solutions-images/tabs-section/Library.png';
import Corporate from '../assets/Solutions-images/tabs-section/Corporate.png';
import layer1 from '../assets/Home-images/Squence-images/locker_01_0350.webp';
import layer2 from '../assets/Home-images/Business-images/2.jpeg';
import layer3 from '../assets/Home-images/Business-images/3.jpeg';
import layer4 from '../assets/Home-images/Business-images/4.jpeg';
import layer5 from '../assets/Home-images/Business-images/1.jpeg';



// mobile-specific images (you already had these available)
import layermb from '../assets/Solutions-images/mobile-tab/Residential.png';
import gymmb from '../assets/Solutions-images/mobile-tab/gym.png';
import mallmb from '../assets/Solutions-images/mobile-tab/mall.png';
import Librarymb from '../assets/Solutions-images/mobile-tab/Library.png';
import Corporatemb from '../assets/Solutions-images/mobile-tab/Corporate.png';
import "../css/Tabs.css";

const slides = [
    {
        title: "Residential",
        desc: "Eliminate Package Theft and provide residents with a secure, 24/7 package amenity.",
        image: layer,
        mobileImage: layermb
    },
    {
        title: "Corporate Office",
        desc: "Streamline mail & secure deliveries inside office campuses.",
        image: Corporate,
        mobileImage: Corporatemb
    },
    {
        title: "Library",
        desc: "Automate book hold pickups & returns securely.",
        image: Library,
        mobileImage: Librarymb
    },
    {
        title: "Malls",
        desc: "Offer shoppers secure pickup & parcel convenience.",
        image: mall,
        mobileImage: mallmb
    },
    {
        title: "Gym",
        desc: "Securely store personal items & packages for members.",
        image: gym,
        mobileImage: gymmb
    }
];

const slideImages = [
    { title: "Residential", image: layer4 },
    { title: "Corporate Office", image: layer1 },
    { title: "Library", image: layer2 },
    { title: "Malls", image: layer3 },
    { title: "Gym", image: layer5 }
];

const Tabs = ({ autoplay = false, autoplayInterval = 6000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 800);
    const slidesCount = slides.length;
    const autoplayRef = useRef(null);

    // update isMobile on resize
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 800);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slidesCount);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);

    useEffect(() => {
        // keyboard navigation
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    useEffect(() => {
        if (!autoplay) return;
        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slidesCount);
        }, autoplayInterval);
        return () => clearInterval(autoplayRef.current);
    }, [autoplay, autoplayInterval, slidesCount]);

    if (!slidesCount) return null;

    return (
        <section className="locker-solution-carousel-section only-windows" aria-label="Solutions carousel" id="tabs-section">
            <div className="locker-carousel-wrapper">
                <div
                    className="locker-carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    role="list"
                >
                    {slides.map((slide, idx) => {
                        const bgImage = isMobile ? null : slide.image;
                        const mobileImg = slide.mobileImage || slide.image;

                        return (
                            <article
                                key={idx}
                                className="locker-solution-carousel"
                                role="listitem"
                                aria-hidden={currentIndex !== idx}
                                style={{
                                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                                }}
                            >

                                {/* MOBILE IMAGE – shows only on mobile */}
                                {isMobile && (
                                    <img
                                        className="locker-mobile-image"
                                        src={mobileImg}
                                        alt={slide.title}
                                        loading="lazy"
                                    />
                                )}

                                {/* CONTENT SECTION */}
                                <div className="locker-carousel-left">
                                    <div className="locker-caorusel-section-contents">
                                        <h1 className="head-text">{slide.title}</h1>
                                        <p className="para-text">{slide.desc}</p>
                                    </div>

                                    <div className="cta-wrapper-left">
                                        <Link to="/" className="find-btn">
                                            Find Your Solution <IoArrowForward className="arrow-icon" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}

                </div>
            </div>

            {/* TAB NAVIGATION */}
            <div className="locker-carousel-tabs-section" role="tablist" aria-label="Solution tabs">
                {slideImages.map((s, idx) => (
                    <button
                        key={idx}
                        type="button"
                        role="tab"
                        aria-selected={currentIndex === idx}
                        className={`locker-tab ${currentIndex === idx ? "active-tab" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        style={{ backgroundImage: `url(${s.image})` }}
                    >
                        <p className="para-text">{s.title}</p>
                    </button>
                ))}

                <div className="locker-buttons-pagination" aria-hidden="false">
                    <button className="circle-btn" onClick={prevSlide} aria-label="Previous slide">
                        <IoChevronBack />
                    </button>
                    <button className="circle-btn" onClick={nextSlide} aria-label="Next slide">
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tabs;
