import { useRef, useEffect } from 'react';
import BannerVideo from '../../assets/Home-images/videos/mobile-video-banner.mp4';
import '../../css/mobile-css/HomeBanneVideoSection.css';
import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";

export default function HomeBanneVideoSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            video.pause(); // Already paused, but explicit
            video.currentTime = video.duration - 0.1; // Go to last frame (avoid black flash)
        };

        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <section className="mobile-home-video-section only-mobile">
            <div className="mobile-home-video-container">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="banner-video"
                >
                    <source src={BannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="mobile-home-video-cta">
                <div className="mobile-home-video-cta-text">
                    <p className="head-text-white">
                        Unlock Efficiency for Your Business
                    </p>
                    <p className="para-text-white">
                        Select your industry to see how our smart lockers can revolutionize your operations.
                    </p>
                </div>

                <div className="ctaSection">
                    <Link to="/" className="ctaSection__button">
                        Find Your Solution
                        <IoArrowForward className="ctaSection__icon" />
                    </Link>
                </div>

            </div>
        </section>
    );
}