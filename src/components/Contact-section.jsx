import React, { useRef, useState } from "react";
import "../css/Contact.css";
import { IoArrowForward } from "react-icons/io5";

export default function ContactSection(props) {
  const sendBtnRef = useRef(null);
  const [status, setStatus] = useState(""); // For success/error message

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  const formData = new FormData(e.target);

  try {
    const res = await fetch("/sendmail.php", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Thank you! Your message has been sent successfully.");
      e.target.reset();
    } else {
      setStatus("Error: " + data.message);
    }
  } catch (err) {
    setStatus(`Connection failed. Please try again. Error: ${err.message}`);
  }
};

  return (
    <section className="contact-form" style={{ background: props.background, paddingTop: props.paddingTop, paddingBottom: props.paddingBottom, marginTop: props.marginTop, marginBottom: props.marginBottom }}>
      <h2 className="head-text">Contact Us</h2>

      <form className="contact-grid animated-form" onSubmit={handleSubmit}>
        {/* All your inputs with name attributes (as above) */}

        <div className="form-group full">
          <label>Name</label>
          <input type="text" name="name" placeholder="First name Last name" required />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="johndoe@email.com" required />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="1234567890" />
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <label>Your Industry</label>
          <select name="industry" required>
            <option value="">Select your usecase</option>
            <option>Logistics</option>
            <option>Retail</option>
            <option>Fitness/Gym</option>
            <option>Residential</option>
          </select>
        </div>

        <div className="form-group">
          <label>Estimated Units Needed</label>
          <select name="units" required>
            <option>1–5 Systems</option>
            <option>6–10 Systems</option>
            <option>10+ Systems</option>
            <option>Just One</option>
          </select>
        </div>

        <div className="form-group">
          <label>Project Timeline</label>
          <select name="timeline" required>
            <option>Within 3 Months (Urgent)</option>
            <option>3–6 Months</option>
            <option>6–12 Months</option>
            <option>Just Exploring Options</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Installation Location</label>
          <input type="text" name="location" placeholder="City, State/Province, Country" required />
          <span className="focus-border"></span>
        </div>

        <div className="form-group full">
          <label>Specific Use Case Details</label>
          <textarea name="message" placeholder="Explain your requirement..." rows="5" required></textarea>
          <span className="focus-border"></span>
        </div>

        {/* Status Message */}
        {status && <p className="status-message" style={{ color: status.includes("Thank") ? "green" : "red", margin: "10px 0" }}>{status}</p>}

        <div className="cta-wrapper-left">
          <button type="submit" ref={sendBtnRef} className="find-btn">
            SEND
            <IoArrowForward className="arrow-icon" />
          </button>
        </div>
      </form>
    </section>
  );
}