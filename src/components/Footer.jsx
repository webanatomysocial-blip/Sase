// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/SASE-logo.png";
import "../css/Footer.css";
import Logos from '../assets/Home-images/Logo-01.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="SASE Logo" />
          </Link>
        </div>

        <div className="footer-nav">
          <div className="nav-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solutions">Locker Solutions</Link></li>
              <li><Link to="/products">Locker Types</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Locker Types</h3>
            <ul>
              {/* use react-router links with hash */}
              <li><Link to="/solutions#tabs-section">Residential</Link></li>
              <li><Link to="/solutions#tabs-section">Corporate Offices</Link></li>
              <li><Link to="/solutions#tabs-section">Educational Institutes</Link></li>
              <li><Link to="/solutions#tabs-section">Gym</Link></li>
              <li><Link to="/solutions#tabs-section">Malls</Link></li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Socials</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube/></a>
            </div>

            <img className="certified-logos-footer" src={Logos} alt="certified logos" srcSet="" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="para-text-white">
          Designed and Developed by{" "}
          <a style={{ color: "#FCE300", textDecoration: "none" }} href="https://webanatomy.in/" target="_blank" rel="noreferrer">
            Web Anatomy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
