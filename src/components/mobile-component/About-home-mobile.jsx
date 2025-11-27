/* AboutHomeMobile.tsx */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper core + pagination styles
import "swiper/css";
import "swiper/css/pagination";
import servicesectionimg from "../../assets/Home-images/Why-Choose-images/1.png";
import servicesectionimg2 from "../../assets/Home-images/Why-Choose-images/2.png";
import servicesectionimg3 from "../../assets/Home-images/Why-Choose-images/3.png";

// Your custom stylesheet (note the semicolon!)
import "../../css/mobile-css/AboutHomeMobile.css";

const slides = [
  {
    image: servicesectionimg,
  },
  {
    image: servicesectionimg2,
  },
  {
    image: servicesectionimg3,
  },
];

export default function AboutHomeMobile() {
  return (
    <section className="mobile-about-home-section only-mobile">
      {/* ---------- TEXT ---------- */}
      <div className="mobile-about-home-container-for-text">
        <p className="para-text">
          At SASE, we simplify delivery, pickup, and storage with intelligent
          locker systems that fit any space - residential, commercial, or
          institutional. Our smart, secure, and scalable solutions redefine
          convenience and efficiency for both users and operators.
        </p>
      </div>

      {/* ---------- CAROUSEL ---------- */}
      <div className="mobile-about-home-container-for-carosule">
        {/* ---- LEFT ICON + LINE ---- */}
        <div className="mobile-about-home-container-for-carosule-inner-left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6913_1707)">
              <path
                d="M14.25 10.5H10.5V9C10.5 8.60218 10.658 8.22064 10.9393 7.93934C11.2206 7.65804 11.6022 7.5 12 7.5C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9V10.5L15 10.9398V9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9V10.7087C8.77275 10.8393 8.58383 11.0273 8.45219 11.254C8.32055 11.4806 8.25082 11.7379 8.25 12V15.75C8.25046 16.1477 8.40864 16.5289 8.68984 16.8102C8.97105 17.0914 9.35232 17.2495 9.75 17.25H14.25C14.6477 17.2495 15.029 17.0914 15.3102 16.8102C15.5914 16.5289 15.7495 16.1477 15.75 15.75V12C15.7495 11.6023 15.5914 11.221 15.3102 10.9398C15.029 10.6586 14.6477 10.5005 14.25 10.5ZM14.25 15.75H9.75V12H14.25V15.75Z"
                fill="#00376B"
              />
              <path
                d="M10.9394 22.8106C11.0787 22.9499 11.244 23.0604 11.426 23.1358C11.608 23.2112 11.803 23.25 12 23.25C12.197 23.25 12.392 23.2112 12.574 23.1358C12.756 23.0604 12.9213 22.9499 13.0606 22.8106L17.4005 18.4704L19.5476 20.6458C19.4681 20.9667 19.4967 21.3048 19.629 21.6077C19.7612 21.9106 19.9898 22.1614 20.2791 22.3212C20.5685 22.481 20.9025 22.5408 21.2293 22.4914C21.5561 22.442 21.8575 22.2861 22.0867 22.048C22.3159 21.8098 22.4601 21.5026 22.4969 21.1741C22.5337 20.8456 22.4611 20.5142 22.2903 20.2312C22.1195 19.9482 21.8601 19.7295 21.5523 19.609C21.2445 19.4884 20.9056 19.4729 20.588 19.5646L18.4614 17.4097L22.8106 13.0606C22.9499 12.9213 23.0604 12.756 23.1358 12.574C23.2112 12.392 23.25 12.197 23.25 12C23.25 11.803 23.2112 11.608 23.1358 11.426C23.0604 11.244 22.9499 11.0787 22.8106 10.9394L18.4705 6.59946L20.6462 4.45258C20.9671 4.53204 21.3052 4.50338 21.6082 4.37104C21.9111 4.2387 22.1619 4.01008 22.3217 3.72066C22.4814 3.43123 22.5412 3.09717 22.4917 2.77032C22.4422 2.44346 22.2862 2.14207 22.0479 1.91291C21.8097 1.68374 21.5024 1.53962 21.1739 1.5029C20.8454 1.46617 20.5139 1.5389 20.2309 1.70979C19.9479 1.88069 19.7292 2.1402 19.6088 2.44806C19.4884 2.75592 19.4729 3.09493 19.5648 3.41248L17.4097 5.53873L13.0606 1.18941C12.9213 1.0501 12.756 0.939595 12.574 0.8642C12.392 0.788805 12.197 0.75 12 0.75C11.803 0.749999 11.608 0.788805 11.426 0.8642C11.244 0.939595 11.0787 1.0501 10.9394 1.18941L6.59031 5.53858L4.43519 3.41248C4.52641 3.09564 4.51057 2.75756 4.39013 2.45064C4.26969 2.14371 4.05137 1.88509 3.76901 1.71485C3.48665 1.5446 3.15602 1.47226 2.82837 1.50901C2.50072 1.54577 2.19433 1.68958 1.95671 1.91815C1.71909 2.14672 1.56351 2.44729 1.51406 2.77327C1.46462 3.09926 1.52409 3.43244 1.68325 3.7212C1.84241 4.00995 2.09237 4.23814 2.39439 4.37039C2.69641 4.50265 3.03362 4.53159 3.35376 4.45273L5.52944 6.59961L1.18941 10.9396C1.0501 11.0788 0.939598 11.2442 0.864202 11.4261C0.788808 11.6081 0.75 11.8032 0.75 12.0001C0.749999 12.1971 0.788808 12.3922 0.864202 12.5741C0.939598 12.7561 1.0501 12.9214 1.18941 13.0607L5.53858 17.4098L3.41196 19.5648C3.09505 19.4736 2.75691 19.4894 2.44994 19.6099C2.14296 19.7304 1.88431 19.9488 1.71407 20.2312C1.54383 20.5137 1.47151 20.8444 1.50832 21.1721C1.54513 21.4998 1.68902 21.8062 1.91768 22.0438C2.14634 22.2815 2.447 22.437 2.77305 22.4864C3.09911 22.5358 3.43235 22.4763 3.72112 22.317C4.00989 22.1577 4.23806 21.9077 4.37027 21.6056C4.50247 21.3034 4.53133 20.9662 4.45236 20.646L6.59946 18.4705L10.9394 22.8106ZM2.24998 12L12 2.24998L21.75 12L12 21.75L2.24998 12Z"
                fill="#00376B"
              />
            </g>
            <defs>
              <clipPath id="clip0_6913_1707">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="stright-line-blue" />
        </div>

        {/* ---- RIGHT SWIPER ---- */}
        <div className="mobile-about-home-container-for-carosule-inner-right">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper1"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="mobile-about-section-carosule-image"
                  src={slide.image}
                  alt={`Locker system ${idx + 1}`}
                />
              </SwiperSlide>
            ))}

            {/* Custom pagination container (optional but clean) */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
