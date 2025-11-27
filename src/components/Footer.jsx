// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import logo from "../assets/SASE-logo.png";
import "../css/Footer.css";
import Logos from "../assets/Home-images/Logo-01.png";

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
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/solutions">Locker Solutions</Link>
              </li>
              <li>
                <Link to="/products">Locker Types</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Locker Types</h3>
            <ul className="only-windows">
              {/* use react-router links with hash */}
              <li>
                <Link to="/solutions#tabs-section">Residential</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section">Corporate Offices</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section">Educational Institutes</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section">Gym</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section">Malls</Link>
              </li>
            </ul>
            <ul className="only-mobile">
              {/* use react-router links with hash */}
              <li>
                <Link to="/solutions#tabs-section-mb">Residential</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section-mb">Corporate Offices</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section-mb">
                  Educational Institutes
                </Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section-mb">Gym</Link>
              </li>
              <li>
                <Link to="/solutions#tabs-section-mb">Malls</Link>
              </li>
            </ul>
          </div>

          <div className="nav-column">
            <h3>Socials</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/sase.tech?igsh=dWZtaW9leXZqdDcw&utm_source=ig_contact_invite"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a
                href="http://www.linkedin.com/in/parcel-drop-8319aa392"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <img
              className="certified-logos-footer"
              src={Logos}
              alt="certified logos"
              srcSet=""
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="para-text-white">
          Designed and Developed by{" "}
          <a
            style={{ color: "#FCE300", textDecoration: "none" }}
            href="https://webanatomy.in/"
            target="_blank"
            rel="noreferrer"
          >
            Web Anatomy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
