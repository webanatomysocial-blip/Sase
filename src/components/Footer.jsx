import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/SASE-logo.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
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
              <li><Link to="/solutions">Locker Solutions</Link></li>
              <li><Link to="/">Locker Types</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Locker Types</h3>
            <ul>
              <li><Link to="/">Residential</Link></li>
              <li><Link to="/">Corporate Offices</Link></li>
              <li><Link to="/">Educational Institutes</Link></li>
              <li><Link to="/">Gym</Link></li>
              <li><Link to="/">Malls</Link></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
            <div className="social-icons">
              <Link to="/" target="_blank">
                <FaInstagram />
              </Link>
              <Link to="/" target="_blank">
                <FaFacebookF />
              </Link>
              <Link to="/" target="_blank">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="para-text-white">Designed and Developed by <a style={{color: "#FCE300", textDecoration: "none"}} href="webanatomy.in">Web Anatomy</a></p>
      </div>
    </footer>
  );
};

export default Footer;