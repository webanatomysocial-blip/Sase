import React from "react";
import "../../css/mobile-css/BusinessMobile.css";
import { IoArrowForward } from "react-icons/io5";
import heroImg from "../../assets//Home-images/Business-images/4.jpeg";
import heroImg2 from "../../assets/Home-images/Squence-images/locker_01_0350.webp";
import heroImg3 from "../../assets/Home-images/Business-images/2.jpeg";
import heroImg4 from "../../assets/Home-images/Business-images/1.jpeg";
import heroImg5 from "../../assets/Home-images/Business-images/3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BusinessMobile = () => {
  const navigate = useNavigate();
  const slides = [
    { title: "Residential", img: heroImg },
    { title: "Corporate Offices", img: heroImg2 },
    { title: "Educational Institutes", img: heroImg3 },
    { title: "Gyms", img: heroImg4 },
    { title: "Malls", img: heroImg5 },
  ];
  const handleIndustryClick = (e) => {
    e.preventDefault();
    navigate("/solutions#tabs-section");

    // Force scroll after navigation
    setTimeout(() => {
      const element = document.getElementById("tabs-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="business-section only-mobile">
      <div className="business-section__header">
        <p className="head-text">
          Unlock Efficiency for <br /> Your Business.
        </p>
        <p className="para-text">
          Select your industry to see how our smart lockers can revolutionize
          your operations.
        </p>
      </div>

      {/* MOBILE SWIPER ONLY */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        centeredSlides
        spaceBetween={1}
        loop
        pagination={{
          clickable: true,
          // Optional: customize bullet rendering if needed
        }}
        className="custom-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="custom-slide"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <a
                href="/solutions#tabs-section"
                onClick={handleIndustryClick}
                className="custom-slide__overlay"
              >
                <h2 className="custom-slide__title">{slide.title}</h2>
                <div className="custom-slide__arrow">
                  <IoArrowForward />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BusinessMobile;
