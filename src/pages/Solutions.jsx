// import React, { useState } from "react";
import "../css/Solutions.css";
import { Link } from "react-router-dom";
import { IoArrowForward} from "react-icons/io5";
import HeroImg from '../assets/Solutions-images/Banner1.png';
import HeroImg2 from '../assets/Home-images/Why-Choose-images/2.png';
import FAQ from '../components/FAQ.jsx';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import VideoComponent from "../components/Video-comp.jsx";
import Video from '../assets/Solutions-images/Sase-22.mp4'
import Tabs from "../components/Tabs-section.jsx";
import TabsMobile from "../components/Tab-section-mobile.jsx";
import AdvancedTechnology from "../components/Advanced-Technology.jsx";





const Solutions = () => {


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



      <Tabs autoplay={true} autoplayInterval={6000} id="tabs-section" />
      <TabsMobile />




      {/* CAROUSEL SECTION mobile */}


      <section className="locker-solution-carousel-section-mobile only-mobile ">



      </section>


   

      <VideoComponent background="black" color="white" paddingTop="100px" paddingBottom="100px" video={Video} objectFit="contain" />

   <AdvancedTechnology />


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


