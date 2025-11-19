import React, { useRef } from "react";
import "../css/Contact.css";
import { IoArrowForward } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";





export default function ContactSection(props) {
  const sendBtnRef = useRef(null);


  return (
    <section className="contact-form" style={{ background: props.background, paddingTop: props.paddingTop, paddingBottom: props.paddingBottom, marginTop: props.marginTop, marginBottom: props.marginBottom }} >
      <h2 className="head-text">Contact Us</h2>

      <form className="contact-grid animated-form">
        <div className="form-group full">
          <label>Name</label>
          <input type="text" placeholder="First name Last name" />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="johndoe@email.com" />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="1234567890" />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Your Industry</label>
          <select>
            <option>Select your usecase</option>
            <option>Logistics</option>
            <option>Retail</option>
            <option>Fitness/Gym</option>
            <option>Residential</option>
          </select>
        </div>

        <div className="form-group">
          <label>Estimated Units Needed</label>
          <select>
            <option>1–5 Systems</option>
            <option>6–10 Systems</option>
            <option>10+ Systems</option>
            <option>Just One</option>
          </select>
        </div>

        <div className="form-group">
          <label>Project Timeline</label>
          <select>
            <option>Within 3 Months (Urgent)</option>
            <option>3–6 Months</option>
            <option>6–12 Months</option>
            <option>Just Exploring Options</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Installation Location</label>
          <input type="text" placeholder="City, State/Province, Country" />
          <span className="focus-border"></span>
        </div>

        <div className="form-group full">
          <label>Specific Use Case Details</label>
          <textarea placeholder="Explain your requirement..."></textarea>
          <span className="focus-border"></span>
        </div>
      </form>

      <div className="cta-wrapper-left">
        <button
          type="button"
          ref={sendBtnRef}
          className="find-btn"

        >
          SEND
          <IoArrowForward className="arrow-icon" />
        </button>
      </div>
    </section>

  );
}