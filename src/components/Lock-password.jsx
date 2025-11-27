import React, { useEffect, useRef } from "react";
import "../css/Lock-password.css";
import { FaAsterisk } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from '../assets/Home-images/Extra-images/lockeropen-img.jpg';
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import downarrow from '../assets/Home-images/Extra-images/downarrow.gif';


gsap.registerPlugin(ScrollTrigger); 

const LockPassword = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".inner-box");
      const icons = gsap.utils.toArray(".asterisk-icon");
      const vidBox = document.querySelector(".vid-locker-box");

      // Pick 4 random boxes
      const randomBoxes = gsap.utils.shuffle(boxes).slice(0, 4);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "75% bottom",
          scrub: 1,
          // markers: true,
        },
       

      });
    //       tl.to(".down-arrow-password-section, .down-text-password-section", {
    //         opacity: 1,
      
    // })

      randomBoxes.forEach((box, i) => {
        // Define the next box (or null for the last one)
        const nextBox = i < randomBoxes.length - 1 ? randomBoxes[i + 1] : null;

        tl.to(box, {
          opacity: 0,
          duration: 3,
          ease: "power1.inOut"
        }, `step${i}`)
          .to(icons[i], {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.7)"
          }, `step${i}+=3`)
          .to(box, {
            opacity: 1,
            duration: 3,
            ease: "power1.inOut"
          }, nextBox ? `step${i + 1}` : `step${i}+=4.5`);
      });

      // Add door-like opening animation for vid-locker-box, fixed at left edge
      tl.to(vidBox, {
        rotateY: 110,
        skewY: -10,
        duration: 2,
        ease: "power2.out",
        transformOrigin: "right" // Explicitly set hinge point in GSAP
      }, `step${randomBoxes.length - 1}+=6`)
     .to(".cta-in-the-locker-section", {
            opacity: 1,
            // duration: 1,
            display: "block",
            // ease: "power2.out"

          }) 
          
    tl.to(".down-arrow-password-section ", {
            opacity: 0,
      
    } , `step${randomBoxes.length - 1}+=6`)
    }, sectionRef);


    return () => ctx.revert();
    
  }, []);

  return (
    <section ref={sectionRef} className="locker-section">
      <div className="down-arrow-password-section">
         <img src={downarrow} alt="Down Arrow" className="down-arrow-password-img"  />
      <p className="subheading-text-white down-text-password-section">
        Dive To Retrive the Parcel
      </p>

      </div>
     
      <div className="locker-container">
        <div className="locker-box">
          {Array(9)
            .fill()
            .map((_, i) => (
              <div key={i} className="inner-box"></div>
            ))}
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="locker-box-2">
            <FaAsterisk className="asterisk-icon" />
          </div>
        ))}

        <div className="locker-vid-container">
          <img src={img} alt="" />
          <div className="vid-locker-box">
          </div>

        </div>



        <div className="cta-in-the-locker-section">
          <div className="cta-in-the-locker-container">
            <p className="para-text-white">
              Experience the next generation of smart lockers with SASE. Designed for convenience, security, and seamless access, our lockers simplify storage and deliveries for businesses and individuals alike.
            </p>
          </div>

          <div className="cta-wrapper11111">
            <Link to="/contact" className="find-btn">
              Upgrade Your Facility
              <IoArrowForward className="arrow-icon" />
            </Link>

          </div>
        </div>


      </div>




      
      
    </section>
  );
};

export default LockPassword;