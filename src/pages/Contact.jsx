import React from "react";
import "../css/Contact.css";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
     return (
    <>
      <Header />
      <div className="contact-wrapper">

        {/* LEFT FORM */}
        <div className="contact-form">
          <h2 className="contact-heading">Contact Us</h2>

          <form className="contact-grid">

            <div className="form-group full">
              <label>Name</label>
              <input type="text" placeholder="First name Last name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="johndoe@email.com" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="1234567890" />
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
            </div>

            <div className="form-group full">
              <label>Specific Use Case Details</label>
              <textarea placeholder="Explain your requirement..."></textarea>
            </div>

                 
          </form>
           <div className="cta-wrapper-left">
                    <Link to="/" className="find-btn">
                      SEND
                      <IoArrowForward className="arrow-icon" />
                    </Link>
          
                  </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24149.7274647969!2d-74.01447105!3d40.70556565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d9f4375%3A0xdeb8947f2b937352!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>

      <Footer />
    </>
  );
};
       