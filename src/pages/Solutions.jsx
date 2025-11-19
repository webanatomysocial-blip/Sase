import React, { useState } from "react";
import "../css/Solutions.css";
import { Link } from "react-router-dom";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import HeroImg from '../assets/Solutions-images/Banner1.png';
import HeroImg2 from '../assets/Home-images/Why-Choose-images/2.png';
import layer from '../assets//Solutions-images/tabs-section/Res.jpg';
import layer1 from '../assets/Home-images/Squence-images/locker_01_0350.webp';
import layer2 from '../assets/Home-images/Business-images/2.jpeg';
import layer3 from '../assets/Home-images/Business-images/3.jpeg';
import layer4 from '../assets/Home-images/Business-images/4.jpeg';
import layer5 from '../assets/Home-images/Business-images/1.jpeg';
import FAQ from '../components/FAQ.jsx';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import VideoComponent from "../components/Video-comp.jsx";
import Video from '../assets/Solutions-images/Sase-22.mp4'



const slides = [
  {
    title: "Residential",
    desc: "Eliminate Package Theft and provide residents with a secure, 24/7 package amenity.",
    image: layer
  },
  {
    title: "Corporate Office",
    desc: "Streamline mail & secure deliveries inside office campuses.",
    image: layer
  },
  {
    title: "Library",
    desc: "Automate book hold pickups & returns securely.",
    image: layer
  },
  {
    title: "Malls",
    desc: "Offer shoppers secure pickup & parcel convenience.",
    image: layer
  },
  {
    title: "Gym",
    desc: "Securely store personal items & packages for members.",
    image: layer
  }
];



const slideImages = [
  {
    title: "Residential",
    image: layer4
  },
  {
    image: layer1,
    title: "Corporate Office",

  },
  {
    image: layer2,
    title: "Library",
  },
  {
    image: layer3,
    title: "Malls",
  },
  {
    image: layer5,
    title: "Gym",
  }

]

const Solutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>

      <Header />

      {/* HERO SECTION */}
      <div className="locker-solution-hero-section">
        <div className="locker-solution-left">
          <div className="locker-hero-section-contents">
            <h1 className="head-text">Optimized Delivery and Asset Management for Every Environment.</h1>
            <p className="para-text">
              Explore how our secure, cloud-connected locker systems are transforming package handling,
              asset control, and convenience across diverse sectors.
            </p>
          </div>

          <div className="cta-wrapper-left">
            <Link to="/" className="find-btn">
              Find Your Solution <IoArrowForward className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="locker-solution-right">
          <img className="locker-solution-hero-image" src={HeroImg} alt="" />
        </div>
      </div>







      {/* CAROUSEL SECTION */}
      <div className="locker-solution-carousel-section">
        <div className="locker-carousel-wrapper">
          <div
            className="locker-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div className="locker-solution-carousel" key={idx} style={{ backgroundImage: `url(${slide.image})` }}>
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

                {/* <div className="locker-carousel-right" >
                  <img className="locker-carousel-image" src={slide.image} alt="" />
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="locker-carousel-tabs-section">
          {slideImages.map((slide, idx) => (
            <div
              key={idx}
              className={`locker-tab ${currentIndex === idx ? "active-tab" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <p className="para-text">{slide.title}</p>
            </div>
          ))}

          <div className="locker-buttons-pagination">
            <button className="circle-btn" onClick={prevSlide}><IoChevronBack /></button>
            <button className="circle-btn" onClick={nextSlide}><IoChevronForward /></button>
          </div>
        </div>
      </div>


  <VideoComponent background="black" color="white" paddingTop="100px" paddingBottom="100px" video={Video} objectFit="contain" />




      {/* BOTTOM SECTION */}
      <div className="locker-smart-section-last-section">
        <div className="locker-smart-left">
          <div className="locker-smart-section-contents">
            <h1 className="head-text">The Smart Choice for Your Next Project</h1>
            <p className="para-text">
              Let our experts help you scope, design, and implement the perfect locker system for your space and budget.
            </p>
          </div>

          <div className="cta-wrapper-left">
            <Link to="/" className="find-btn">
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


