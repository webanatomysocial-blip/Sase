import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/About-us-section.css";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import servicesectionimg from "../assets/Home-images/Why-Choose-images/1.png";
import servicesectionimg2 from "../assets/Home-images/Why-Choose-images/2.png";
import servicesectionimg3 from "../assets/Home-images/Why-Choose-images/3.png";


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    /* ---------- FRAME SETTINGS ---------- */
    /* ---------- FRAME SETTINGS ---------- */
    const START_FRAME = 350;
    const END_FRAME = 210;

    /*  NEW: Use Vite's new URL() to resolve assets correctly  */
    const FRAME_FORMAT = (i) => {
      const filename = `locker_01_trans_${String(i).padStart(4, "0")}.webp`;
      return new URL(
        `../assets/Home-images/reverse-nobackground-locker/${filename}`,
        import.meta.url
      ).href;
    };

    /* ---------- PRE-LOAD + CANVAS ---------- */
    let frames = [];
    let canvas = null;
    let ctx = null;
    let isMounted = true;

    const init = async () => {
      if (!isMounted) return;

      // Load frames 350 → 210 (reverse)
      for (let i = START_FRAME; i >= END_FRAME; i--) {
        const img = new Image();
        img.src = FRAME_FORMAT(i);
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // ignore missing frames
        });
        frames.push(img);
      }

      canvas = document.querySelector(".middle-about-canvas");
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      if (!ctx) return;

      const firstImg = frames[0];
      canvas.width = firstImg.naturalWidth;
      canvas.height = firstImg.naturalHeight;
    };

    init();

    /* ---------- MIDDLE CONTAINER (canvas) ---------- */
    const middleTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top bottom",
        end: "+=1500",
        scrub: 1,
        id: "middle-container",
        onUpdate: (self) => {
          if (!ctx || !canvas) return;
          const idx = Math.floor(self.progress * (frames.length - 1));
          const img = frames[idx]; // 350 … 210
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        },
      },
    });

    // Your “simpler” animation
    /* 0 → 1 : fade-in */
    middleTL.to(".middle-about-container", {
      opacity: 1,
      zIndex: 1000,
      ease: "none",
      duration: 0.15,
    });

    /* 1 → 2 : grow + move + scale */
    middleTL.to(
      ".middle-about-container",
      {
        // width: "100%",
        left: "30%",
        top: "10%",
        scale: 0.45,
        ease: "none",
        duration: 0.45,
        zIndex: 1000,
      },
      "+=0"
    );

    /* 2 → 3 : slide a little higher */
    middleTL.to(
      ".middle-about-container",
      {
        top: "10%",
        ease: "none",
        duration: 0.15,
        zIndex: 1000,
      },
      ">"
    );

    /* 3 → 4 : keep it fully visible for a moment */
    middleTL.to(
      ".middle-about-container",
      {
        opacity: 1,
        ease: "none",
        duration: 0.15,
      },
      "+=0.1"
    );

    /* 4 → 5 : fade-out when .animation-section-2 enters */
    middleTL.to(
      ".middle-about-container",
      {
        opacity: 0,
        ease: "none",
        duration: 0.05,
        zIndex: 10,
      },
      // start the fade-out a little before the end of the timeline
      // (you can tweak the "+=0.3" gap)
      "+=0.2"
    )

    // .to(
    //   ".middle-about-container",{
    //     display: "none",
    //     duration: 0.5,
    //   }, "+=0.5")

    // Animation for .outer-lock
    gsap.to('.outer-lock', {
      rotate: '180deg',
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-us-section',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
      },
    });

    // Animation for .left-about-container-outer
    gsap.to('.left-about-container-outer', {
      background: '#F9F5F0',
      scrollTrigger: {
        trigger: '.about-us-section',
        start: 'top 60%',
        end: 'top top',
        scrub: true,
        // toggleActions: 'play none none reverse',
      },
    });

    // Animation for .left-about-container
    gsap.to('.left-about-container', {
      top: '20%',
      scrollTrigger: {
        trigger: '.about-us-section',
        start: 'top 50%',
        end: 'top top',
        scrub: 1,
      },
    });

    // Animation for .left-about-container-duplicate
    const duplicateTL = gsap.timeline(
      {

      
      scrollTrigger: {
        trigger: '.about-us-section',
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1,
      },
    }

    );
    duplicateTL.to('.left-about-container-duplicate', {
      top: '20%',
      
    }).to('.three-in-one-section', {
        top: '20%',
      })

    // Timeline for .left-about-container and duplicates
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animation-section-2',
        start: 'top bottom',
        end: 'top top',
        // scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
    tl.to('.left-about-container', {
      left: '65%',
      opacity: '0',
      display: 'none',
    }) .to('.three-in-one-section', {
        opacity: '1',
      }, '<')

      .to(
        '.left-about-container-duplicate',
        {
          left: '65%',
          opacity: '1',
        },
        '<'
      )
      .to(
        '.left-about-container-duplicate-2',
        {
          left: '65%',
        },
        '<'
      )
      .to(
        '.left-about-container-duplicate-3',
        {
          left: '65%',
        },
        '<'
      )
      .to(
        '.three-in-one-section',
        {
          left: '54.5%',
        },
        '<'
      );


    gsap.to(' .left-about-container-inner-one ', {
      opacity: 0,
      display: 'none',
      ease: 'none',
      // zIndex: '-1',
      scrollTrigger: {
        trigger: '.animation-section-2',
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,
        // toggleActions: 'play none none reverse',
      },
    });

    // Timeline for animation-section-2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.animation-section-2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl2.to('.animation-section-2-img-goes-left', {
      left: '-50%',
      opacity: '0',
    })
      
      .to('.animation-section-2-img-comes-top', {
        top: '10%',
        opacity: '1',
      }, '<')
      
      .to('.left-about-container-duplicate-2', {
        opacity: '1',
        top: '20%',

      }, "<")
      .to('.animation-section-2-img-comes-top', {
        left: '-50%',
        opacity: '0',
      })
     
      .to('.left-about-container-duplicate-3', {
        opacity: '1',
        top: '20%',

      }, "<")
      .to('.animation-section-2-img-comes-top-2', {
        top: '15%',
        opacity: '1',
      }, "<"

      )




    const allgoestop = gsap.timeline({
      scrollTrigger: {
        trigger: '.animation-section-2',
        start: '100% bottom',
        end: 'bottom 10%',
        scrub: true,
        // markers: true,

      },
    });



    allgoestop.to('.allgoestop', {
      top: '-100%',
      // opacity: '0',
      // xPercent: '-50%',

    },)
  


    /* ---------- CLEANUP ---------- */
    return () => {
      isMounted = false;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="only-windows">
      {/* ---------- MIDDLE CONTAINER (canvas) ---------- */}
      <div className="middle-about-container">
        <canvas className="middle-about-canvas"></canvas>
      </div>

      {/* LEFT PANELS */}
      <div className="left-about-container">
        <p className="para-text-white">
         SASE’s privacy lock secures every transaction with advanced encryption and authentication.
        </p>
        <div className="left-about-svg-container">
          <svg
            className="outer-lock"
            width="60"
            height="60"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.6211 25.1208C44.8997 24.8422 45.1207 24.5116 45.2715 24.1476C45.4223 23.7836 45.4999 23.3936 45.4999 22.9996C45.4999 22.6056 45.4223 22.2156 45.2715 21.8516C45.1207 21.4877 44.8997 21.157 44.6211 20.8785L35.9408 12.1986L40.2917 7.90435C40.9333 8.06336 41.6096 8.00616 42.2154 7.74163C42.8213 7.4771 43.3229 7.02003 43.6424 6.44132C43.962 5.86261 44.0817 5.19461 43.9829 4.54096C43.884 3.8873 43.5723 3.28453 43.0959 2.82614C42.6195 2.36776 42.0052 2.07939 41.3483 2.00578C40.6913 1.93216 40.0284 2.07741 39.4624 2.419C38.8964 2.76058 38.4589 3.2794 38.2179 3.89498C37.9769 4.51055 37.9457 5.18847 38.1293 5.82355L33.8193 10.0768L25.1211 1.37845C24.8426 1.09984 24.5119 0.878826 24.148 0.728035C23.784 0.577245 23.3939 0.499634 23 0.499634C22.606 0.499634 22.2159 0.577245 21.852 0.728035C21.488 0.878826 21.1573 1.09984 20.8788 1.37845L12.1989 10.0585L7.90517 5.70715C8.06409 5.06537 8.00676 4.38907 7.74208 3.7832C7.4774 3.17732 7.02016 2.67572 6.44131 2.35623C5.86246 2.03674 5.19435 1.91722 4.54063 2.0162C3.88691 2.11518 3.28413 2.42714 2.82581 2.90367C2.36749 3.38021 2.07924 3.99468 2.00579 4.65175C1.93234 5.30883 2.0778 5.97178 2.41959 6.53775C2.76137 7.10372 3.28039 7.54108 3.89612 7.78196C4.51185 8.02284 5.18986 8.05379 5.82497 7.87L10.0775 12.1803L1.37882 20.8785C1.10021 21.157 0.879192 21.4877 0.728402 21.8516C0.577612 22.2156 0.5 22.6056 0.5 22.9996C0.5 23.3936 0.577612 23.7836 0.728402 24.1476C0.879192 24.5116 1.10021 24.8422 1.37882 25.1208L10.0772 33.819L5.82497 38.1292C5.19129 37.9468 4.51513 37.9784 3.90128 38.2193C3.28743 38.4602 2.77018 38.8968 2.42969 39.4615C2.08921 40.0263 1.94451 40.6875 2.01803 41.3428C2.09154 41.9981 2.37916 42.6109 2.8363 43.0861C3.29345 43.5614 3.89459 43.8726 4.54655 43.9714C5.19852 44.0703 5.86489 43.9514 6.44239 43.6331C7.0199 43.3148 7.47627 42.8148 7.74079 42.2108C8.00531 41.6068 8.06319 40.9323 7.90547 40.292L12.1992 35.9407L20.8791 44.6208C21.1576 44.8994 21.4883 45.1204 21.8523 45.2712C22.2162 45.422 22.6063 45.4996 23.0003 45.4996C23.3942 45.4996 23.7843 45.422 24.1483 45.2712C24.5122 45.1204 24.8429 44.8994 25.1214 44.6208L33.8196 35.9224L38.1296 40.1757C37.9471 40.8095 37.9789 41.4858 38.2198 42.0997C38.4608 42.7136 38.8976 43.231 39.4625 43.5714C40.0273 43.9119 40.6888 44.0566 41.3442 43.9829C41.9996 43.9093 42.6124 43.6215 43.0877 43.1642C43.5629 42.7069 43.8741 42.1056 43.9728 41.4535C44.0716 40.8014 43.9525 40.1349 43.634 39.5573C43.3155 38.9798 42.8153 38.5235 42.2111 38.259C41.6069 37.9946 40.9323 37.9369 40.292 38.0949L35.9411 33.8007L44.6211 25.1208ZM23 42.4996L3.49997 22.9996L23 3.4996L42.5 22.9996L23 42.4996Z"
              fill="#F9DF37"
            />
          </svg>
          <svg
            className="inner-lock"
            width="16"
            height="23"
            viewBox="0 0 16 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 8.99963H5V5.99963C5 5.20398 5.31607 4.44092 5.87868 3.87831C6.44129 3.3157 7.20435 2.99963 8 2.99963C8.79565 2.99963 9.55871 3.3157 10.1213 3.87831C10.6839 4.44092 11 5.20398 11 5.99963H14C14 4.40833 13.3679 2.88221 12.2426 1.75699C11.1174 0.631775 9.5913 -0.000366211 8 -0.000366211C6.4087 -0.000366211 4.88258 0.631775 3.75736 1.75699C2.63214 2.88221 2 4.40833 2 5.99963V9.41708C1.54549 9.67825 1.16765 10.0543 0.904376 10.5076C0.641099 10.9609 0.501645 11.4754 0.5 11.9996V19.4996C0.500913 20.295 0.817277 21.0575 1.37969 21.6199C1.9421 22.1824 2.70463 22.4987 3.5 22.4996H12.5C13.2954 22.4987 14.0579 22.1824 14.6203 21.6199C15.1827 21.0575 15.4991 20.295 15.5 19.4996V11.9996C15.4991 11.2043 15.1827 10.4417 14.6203 9.87932C14.0579 9.31691 13.2954 9.00055 12.5 8.99963ZM12.5 19.4996H3.5V11.9996H12.5V19.4996Z"
              fill="#F9DF37"
            />
          </svg>
        </div>
        <div className="left-about-line-container"></div>
      </div>

      <div className="left-about-container-duplicate  allgoestop">
        <svg width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6983_3015)">
                                <path d="M17.8281 49L26.3421 40.4864L23.5141 37.6582L14.9999 46.1718L13.4139 44.586C13.2283 44.4002 13.0079 44.2528 12.7653 44.1523C12.5226 44.0517 12.2626 43.9999 11.9999 43.9999C11.7373 43.9999 11.4772 44.0517 11.2346 44.1523C10.992 44.2528 10.7716 44.4002 10.5859 44.586L2.58595 52.586C2.40015 52.7716 2.25276 52.9921 2.1522 53.2347C2.05164 53.4773 1.99988 53.7374 1.99988 54C1.99988 54.2626 2.05164 54.5227 2.1522 54.7653C2.25276 55.0079 2.40015 55.2284 2.58595 55.414L8.58595 61.414C8.77159 61.5998 8.99202 61.7471 9.23464 61.8477C9.47726 61.9482 9.73732 62 9.99995 62C10.2626 62 10.5226 61.9482 10.7653 61.8477C11.0079 61.7471 11.2283 61.5998 11.4139 61.414L19.4139 53.414C19.5997 53.2284 19.7471 53.0079 19.8477 52.7653C19.9483 52.5227 20 52.2626 20 52C20 51.7374 19.9483 51.4773 19.8477 51.2347C19.7471 50.9921 19.5997 50.7716 19.4139 50.586L17.8281 49ZM9.99995 57.1718L6.82815 54L11.9999 48.8282L15.1717 52L9.99995 57.1718Z" fill="#F9DF37" />
                                <path d="M48 60C44.8185 59.9964 41.7683 58.731 39.5187 56.4814C37.269 54.2317 36.0036 51.1815 36 48C36.0015 46.9545 36.1434 45.9139 36.4218 44.9062L19.0938 27.5786C18.086 27.8567 17.0455 27.9984 16 28C14.0449 28.008 12.1177 27.5362 10.3873 26.6259C8.65697 25.7157 7.17635 24.3949 6.07529 22.7793C4.97422 21.1636 4.28634 19.3026 4.07195 17.3592C3.85756 15.4159 4.12321 13.4496 4.84562 11.6328L5.96102 8.78899L12.586 15.414C12.9668 15.7776 13.473 15.9805 13.9995 15.9805C14.526 15.9805 15.0323 15.7776 15.413 15.414C15.5989 15.2284 15.7464 15.008 15.8471 14.7653C15.9477 14.5227 15.9995 14.2626 15.9995 13.9999C15.9995 13.7372 15.9477 13.4771 15.8471 13.2344C15.7464 12.9918 15.5989 12.7714 15.413 12.5858L8.78722 5.95799L11.6338 4.84379C13.4507 4.12231 15.4168 3.85743 17.3599 4.07234C19.303 4.28725 21.1637 4.9754 22.779 6.07651C24.3943 7.17761 25.715 8.65805 26.6252 10.3881C27.5354 12.1182 28.0075 14.0451 28 16C27.9985 17.0455 27.8566 18.0861 27.5782 19.0938L44.9062 36.4208C45.9141 36.143 46.9546 36.0015 48 36C49.9552 35.992 51.8824 36.4637 53.6128 37.3739C55.3432 38.2841 56.8238 39.605 57.9249 41.2206C59.0259 42.8363 59.7138 44.6974 59.9281 46.6408C60.1425 48.5841 59.8767 50.5504 59.1542 52.3672L58.04 55.211L51.414 48.586C51.0333 48.2224 50.527 48.0195 50.0005 48.0195C49.474 48.0195 48.9678 48.2224 48.587 48.586C48.401 48.7715 48.2535 48.9919 48.1527 49.2345C48.052 49.4771 48.0001 49.7372 48 49.9999C47.9999 50.2626 48.0516 50.5227 48.1522 50.7654C48.2527 51.0081 48.4002 51.2285 48.586 51.4142L55.211 58.04L52.3672 59.1558C50.9773 59.7087 49.4958 59.9951 48 60ZM20.125 22.9526L41.0468 43.875L40.5684 45.0938C40.1001 46.2648 39.917 47.5304 40.0343 48.7861C40.1517 50.0418 40.566 51.2516 41.2432 52.3155C41.9204 53.3794 42.841 54.267 43.9289 54.905C45.0168 55.5429 46.2409 55.9129 47.5 55.9844L45.7578 54.2422C45.2006 53.6852 44.7585 53.0238 44.4569 52.2959C44.1553 51.5679 44 50.7877 44 49.9998C44 49.2119 44.1553 48.4316 44.4569 47.7037C44.7585 46.9758 45.2006 46.3144 45.7578 45.7574C46.9009 44.6663 48.4205 44.0577 50.0007 44.0579C51.581 44.0581 53.1003 44.6671 54.2432 45.7584L55.9844 47.5C55.9128 46.2408 55.5426 45.0167 54.9046 43.9288C54.2665 42.8409 53.3789 41.9204 52.3148 41.2432C51.2508 40.5661 50.041 40.1517 48.7853 40.0344C47.5295 39.917 46.2639 40.1001 45.0928 40.5684L43.874 41.0454L22.954 20.1254L23.4324 18.9066C23.9008 17.7356 24.0839 16.47 23.9666 15.2143C23.8493 13.9585 23.4349 12.7487 22.7578 11.6848C22.0806 10.6208 21.1601 9.73315 20.0722 9.09516C18.9843 8.45717 17.7602 8.08713 16.501 8.01559L18.2422 9.75779C18.7995 10.3148 19.2416 10.9762 19.5432 11.7041C19.8448 12.432 20 13.2123 20 14.0002C20 14.7881 19.8448 15.5683 19.5432 16.2963C19.2416 17.0242 18.7995 17.6856 18.2422 18.2426C17.0991 19.3336 15.5795 19.9423 13.9993 19.9421C12.4191 19.9419 10.8997 19.3329 9.75682 18.2416L8.01562 16.5C8.08699 17.7592 8.45691 18.9833 9.09483 20.0713C9.73275 21.1592 10.6204 22.0798 11.6844 22.757C12.7483 23.4342 13.9582 23.8485 15.2139 23.9657C16.4697 24.0829 17.7353 23.8997 18.9062 23.4312L20.125 22.9526Z" fill="#F9DF37" />
                                <path d="M58.246 5.70005C57.1032 4.60894 55.5838 4.00012 54.0038 4.00012C52.4237 4.00012 50.9044 4.60894 49.7616 5.70005L34.8008 20.6601L37.629 23.4881L52.589 8.52805C52.9701 8.16457 53.4765 7.96178 54.0031 7.96178C54.5297 7.96178 55.0361 8.16457 55.4172 8.52805C55.7915 8.90367 56.0016 9.4123 56.0016 9.94255C56.0016 10.4728 55.7915 10.9814 55.4172 11.3571L40.4572 26.317L43.2852 29.1453L58.2452 14.1863C59.3693 13.0603 60.0007 11.5343 60.0008 9.94332C60.001 8.3523 59.3699 6.82622 58.246 5.70005Z" fill="#F9DF37" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6983_3015">
                                    <rect width="100" height="100" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
        <h3 className="head-text-white"> 100% Package Acceptance</h3>
        <p className="para-text-white">Accept every delivery — any size, any carrier, any time. No missed packages. No storage chaos.</p>
      </div>

      <div className="left-about-container-duplicate-2 allgoestop">
         <svg width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6983_3007)">
                                <path d="M22 22V42H42V22H22ZM38 38H26V26H38V38Z" fill="#F9DF37" />
                                <path d="M60 26V22H52V16C52 14.9391 51.5786 13.9217 50.8284 13.1716C50.0783 12.4214 49.0609 12 48 12H42V4H38V12H26V4H22V12H16C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16V22H4V26H12V38H4V42H12V48C12 49.0609 12.4214 50.0783 13.1716 50.8284C13.9217 51.5786 14.9391 52 16 52H22V60H26V52H38V60H42V52H48C49.0609 52 50.0783 51.5786 50.8284 50.8284C51.5786 50.0783 52 49.0609 52 48V42H60V38H52V26H60ZM48 48H16V16H48V48Z" fill="#F9DF37" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6983_3007">
                                    <rect width="100" height="100" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

        <h3 className="head-text-white">Best-in-Class Technology</h3>
        <p className="para-text-white">Experience reliable hardware paired with powerful, user-friendly software. Real-time monitoring, analytics, and integrations keep everything under control.</p>
      </div>

      <div className="left-about-container-duplicate-3 allgoestop">
       <svg width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7186_12)">
                                <path d="M58.963 17.248L38.963 6.24804C38.6677 6.08564 38.3362 6.00049 37.9992 6.00049C37.6622 6.00049 37.3307 6.08564 37.0354 6.24804L17.0354 17.248C16.7218 17.4207 16.4603 17.6743 16.2782 17.9825C16.0961 18.2907 16 18.6421 16 19C16 19.358 16.0961 19.7094 16.2782 20.0176C16.4603 20.3257 16.7218 20.5794 17.0354 20.752L35.9992 31.1826V52.6172L29.9268 49.2786L27.9992 52.7824L37.0354 57.752C37.3306 57.9147 37.6621 58 37.9992 58C38.3362 58 38.6678 57.9147 38.963 57.752L58.963 46.752C59.2767 46.5795 59.5384 46.3259 59.7206 46.0177C59.9029 45.7095 59.9991 45.3581 59.9992 45V19C59.9991 18.642 59.9029 18.2905 59.7206 17.9824C59.5384 17.6742 59.2767 17.4206 58.963 17.248ZM37.9992 10.2832L53.8488 19L37.9992 27.7168L22.1496 19L37.9992 10.2832ZM55.9992 43.8174L39.9992 52.6174V31.1826L55.9992 22.3826V43.8174Z" fill="#F9DF37" />
                                <path d="M4 32L20 32V28H4V32Z" fill="#F9DF37" />
                                <path d="M8 48H24V44H8V48Z" fill="#F9DF37" />
                                <path d="M12 40H28V36H12V40Z" fill="#F9DF37" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7186_12">
                                    <rect width="100" height="100" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
        <h3 className="head-text-white">Unparalleled Service</h3>
        <p className="para-text-white"> From installation to ongoing support, our dedicated team ensures your locker system operates flawlessly every day.</p>
      </div>

      <div className="three-in-one-section allgoestop">
        <div className="three-in-one-container">
       <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7186_12)">
                                <path d="M58.963 17.248L38.963 6.24804C38.6677 6.08564 38.3362 6.00049 37.9992 6.00049C37.6622 6.00049 37.3307 6.08564 37.0354 6.24804L17.0354 17.248C16.7218 17.4207 16.4603 17.6743 16.2782 17.9825C16.0961 18.2907 16 18.6421 16 19C16 19.358 16.0961 19.7094 16.2782 20.0176C16.4603 20.3257 16.7218 20.5794 17.0354 20.752L35.9992 31.1826V52.6172L29.9268 49.2786L27.9992 52.7824L37.0354 57.752C37.3306 57.9147 37.6621 58 37.9992 58C38.3362 58 38.6678 57.9147 38.963 57.752L58.963 46.752C59.2767 46.5795 59.5384 46.3259 59.7206 46.0177C59.9029 45.7095 59.9991 45.3581 59.9992 45V19C59.9991 18.642 59.9029 18.2905 59.7206 17.9824C59.5384 17.6742 59.2767 17.4206 58.963 17.248ZM37.9992 10.2832L53.8488 19L37.9992 27.7168L22.1496 19L37.9992 10.2832ZM55.9992 43.8174L39.9992 52.6174V31.1826L55.9992 22.3826V43.8174Z" fill="#ffff" />
                                <path d="M4 32L20 32V28H4V32Z" fill="#ffff" />
                                <path d="M8 48H24V44H8V48Z" fill="#ffff" />
                                <path d="M12 40H28V36H12V40Z" fill="#ffff" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7186_12">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
        <h3 className="subheading-text-white">100% Package Acceptance</h3>
        
        </div>
        <div className="three-in-one-container">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7186_12)">
                                <path d="M58.963 17.248L38.963 6.24804C38.6677 6.08564 38.3362 6.00049 37.9992 6.00049C37.6622 6.00049 37.3307 6.08564 37.0354 6.24804L17.0354 17.248C16.7218 17.4207 16.4603 17.6743 16.2782 17.9825C16.0961 18.2907 16 18.6421 16 19C16 19.358 16.0961 19.7094 16.2782 20.0176C16.4603 20.3257 16.7218 20.5794 17.0354 20.752L35.9992 31.1826V52.6172L29.9268 49.2786L27.9992 52.7824L37.0354 57.752C37.3306 57.9147 37.6621 58 37.9992 58C38.3362 58 38.6678 57.9147 38.963 57.752L58.963 46.752C59.2767 46.5795 59.5384 46.3259 59.7206 46.0177C59.9029 45.7095 59.9991 45.3581 59.9992 45V19C59.9991 18.642 59.9029 18.2905 59.7206 17.9824C59.5384 17.6742 59.2767 17.4206 58.963 17.248ZM37.9992 10.2832L53.8488 19L37.9992 27.7168L22.1496 19L37.9992 10.2832ZM55.9992 43.8174L39.9992 52.6174V31.1826L55.9992 22.3826V43.8174Z" fill="#ffff" />
                                <path d="M4 32L20 32V28H4V32Z" fill="#ffff" />
                                <path d="M8 48H24V44H8V48Z" fill="#ffff" />
                                <path d="M12 40H28V36H12V40Z" fill="#ffff" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7186_12">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
        <h3 className="subheading-text-white">Best-in-Class Technology
</h3>
      
        </div>
        <div className="three-in-one-container">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7186_12)">
                                <path d="M58.963 17.248L38.963 6.24804C38.6677 6.08564 38.3362 6.00049 37.9992 6.00049C37.6622 6.00049 37.3307 6.08564 37.0354 6.24804L17.0354 17.248C16.7218 17.4207 16.4603 17.6743 16.2782 17.9825C16.0961 18.2907 16 18.6421 16 19C16 19.358 16.0961 19.7094 16.2782 20.0176C16.4603 20.3257 16.7218 20.5794 17.0354 20.752L35.9992 31.1826V52.6172L29.9268 49.2786L27.9992 52.7824L37.0354 57.752C37.3306 57.9147 37.6621 58 37.9992 58C38.3362 58 38.6678 57.9147 38.963 57.752L58.963 46.752C59.2767 46.5795 59.5384 46.3259 59.7206 46.0177C59.9029 45.7095 59.9991 45.3581 59.9992 45V19C59.9991 18.642 59.9029 18.2905 59.7206 17.9824C59.5384 17.6742 59.2767 17.4206 58.963 17.248ZM37.9992 10.2832L53.8488 19L37.9992 27.7168L22.1496 19L37.9992 10.2832ZM55.9992 43.8174L39.9992 52.6174V31.1826L55.9992 22.3826V43.8174Z" fill="#ffff" />
                                <path d="M4 32L20 32V28H4V32Z" fill="#ffff" />
                                <path d="M8 48H24V44H8V48Z" fill="#ffff" />
                                <path d="M12 40H28V36H12V40Z" fill="#ffff" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7186_12">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
        <h3 className="subheading-text-white">Unparalleled Service</h3>
       
        </div>
      </div>

      {/* ---------- MAIN SECTION ---------- */}
      <section className="about-us-section">
        <div className="about-us-inner-container">
          <div className="left-about-container-outer">
            <div className="left-about-container-inner-one">
              <p className="para-text">
               At SASE, we simplify logistics with smart, <br /> reliable, and human-centric technology.
              </p>
              <div className="cta-wrapper" style={{ width: "100%" }}>
                <Link to="/" className="find-btn">
                  Find Your Solution
                  <IoArrowForward className="arrow-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 2 ---------- */}
      <section className="animation-section-2">
        <div className="animation-section-inside-container">
          <h3 className="head-text">
            Why Choose Our <br /> Smart Locker Systems?
          </h3>
          <img
            className="animation-section-2-img-goes-left"
            src={servicesectionimg}
            alt=""
          />
          <img
            className="animation-section-2-img-comes-top"
            src={servicesectionimg2}
            alt=""
          />
          <img
            className="animation-section-2-img-comes-top-2"
            src={servicesectionimg3}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;