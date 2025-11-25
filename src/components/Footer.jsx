import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/SASE-logo.png";
import "../css/Footer.css";
import Logos from '../assets/Home-images/Logo-01.png';


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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solutions">Locker Solutions</Link></li>
              <li><Link to="/Products">Locker Types</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Locker Types</h3>
            <ul>
              <li><a href="/Solutions#tabs-section">Residential</a></li>
              <li><a href="/Solutions#tabs-section">Corporate Offices</a></li>
              <li><a href="/Solutions#tabs-section">Educational Institutes</a></li>
              <li><a href="/Solutions#tabs-section">Gym</a></li>
              <li><a href="/Solutions#tabs-section">Malls</a></li>
            </ul>
          </div>


          <div className="nav-column">
            <h3>Socials</h3>
            
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

            {/* <h3 className="certified-logos">Lorem ipsum</h3> */}
            <img className="certified-logos-footer" src={Logos} alt="" srcset="" />
            
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="para-text-white">Designed and Developed by <a style={{color: "#FCE300", textDecoration: "none"}} href="https://webanatomy.in/">Web Anatomy</a></p>
      </div>
    </footer>
  );
};

export default Footer;