import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowForward, IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/SASE-logo.png";
import "../css/Header.css";

const Header = () => {
  const [isHeaderBlack, setIsHeaderBlack] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHeaderBlack(currentScrollY > window.innerHeight);
      setIsHeaderHidden(currentScrollY > lastScrollY.current);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      scrollPosition.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden"; // for iOS
    } else {
      // restore scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`header ${isHeaderBlack ? "black-bg" : "transparent-bg"} ${isHeaderHidden ? "hidden" : ""
        }`}
      ref={headerRef}
    >
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </div>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "menu-open" : ""}`}>
        <ul className="nav-list">
          <li><Link to="/Solutions">Locker Solutions</Link></li>
          <li><Link to="/">Locker Types</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><a href="https://test.thesase.tech/login">Login</a></li>
        </ul>

        <div className="cta-wrapper">
          <Link to="/" className="find-btn">
            Find Your Solution
            <IoArrowForward className="arrow-icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;