import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import LockerHome from '../components/LockerHome';
import '../css/index.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Business from '../components/Business.jsx';
import VideoComponent from '../components/Video-comp.jsx';
import LockPassword from '../components/Lock-password.jsx';
import AboutSection from '../components/About-section.jsx';
import FAQ from '../components/FAQ.jsx';
import HomeBanneVideoSection from '../components/mobile-component/Home-banne-video-section.jsx';
import AboutHomeMobile from '../components/mobile-component/About-home-mobile.jsx';
import WhyChoose from '../components/mobile-component/Why-Choose-us.jsx';
import BusinessMobile from '../components/mobile-component/BusinessMobile.jsx';




gsap.registerPlugin(ScrollTrigger);

function Home() {
  const lenisRef = useRef(null);
  const leftRef = useRef(null);
  const targetRef = useRef(null);

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

    lenisRef.current.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenisRef.current.scrollTo(value, { immediate: true });
        }
        return lenisRef.current.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.refresh();





    const leftContainer = leftRef.current;
    const targetSlot = targetRef.current;

    if (leftContainer && targetSlot) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us-section",
          start: "bottom 30%",
          end: "top 20%",
          scrub: 1,
          markers: true, // Remove later!
        }
      });

      const clone = leftContainer.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.zIndex = '1000';
      document.body.appendChild(clone);

      tl.to(clone, {
        x: () => window.innerWidth * 0.6,
        y: 200,
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut"
      })
        .to(clone, { opacity: 0, duration: 0.5 }, "-=0.5")
        .call(() => {
          leftContainer.style.opacity = '0';
          leftContainer.style.display = 'none';
          targetSlot.appendChild(clone);
          clone.style.position = 'relative';
          clone.style.zIndex = '1';
          clone.style.opacity = '1';
          clone.classList.add('arrived-container');
          gsap.fromTo(clone,
            { scale: 0.8 },
            { scale: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
        });
    }

    return () => {
      lenisRef.current.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />

      {/* mobile */}
      <HomeBanneVideoSection />
      <AboutHomeMobile />
      <WhyChoose />
      {/* mobile */}


      <LockerHome lenis={lenisRef.current} />
      <AboutSection />
      <Business />
      <BusinessMobile />
      <VideoComponent />
      <LockPassword />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;