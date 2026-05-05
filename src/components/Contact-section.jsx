import React, { useRef, useState } from "react";
import "../css/Contact.css";
import { IoArrowForward } from "react-icons/io5";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export default function ContactSection(props) {
  const sendBtnRef = useRef(null);
  const [status, setStatus] = useState(""); // For success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/send-email.php", {
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
    <section
      className="contact-section-container"
      style={{
        background: props.background,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
    >
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2 className="head-text">Contact Us</h2>

          <form className="contact-grid animated-form" onSubmit={handleSubmit}>
            {/* All your inputs with name attributes (as above) */}

            <div className="form-group full">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="First name Last name"
                required
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@email.com"
                required
              />
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
              <input
                type="text"
                name="location"
                placeholder="City, State/Province, Country"
                required
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group full">
              <label>Specific Use Case Details</label>
              <textarea
                name="message"
                placeholder="Explain your requirement..."
                rows="5"
                required
              ></textarea>
              <span className="focus-border"></span>
            </div>

            {/* Status Message */}

            <div className="cta-wrapper-left">
              <button type="submit" ref={sendBtnRef} className="find-btn">
                SEND
                <IoArrowForward className="arrow-icon" />
              </button>
            </div>
          </form>
          {status && (
            <p
              className="status-message"
              style={{
                color: status.includes("Thank") ? "green" : "red",
                margin: "10px 0",
                paddingLeft: "60px",
              }}
            >
              {status}
            </p>
          )}
        </div>

        <div className="contact-info-right">
          <div className="info-card">
            <h3 className="info-title">Why choose SASE?</h3>
            <p className="info-desc">
              Experience seamless, secure, and tech-driven storage solutions
              tailored to your industry. Our smart lockers provide 24/7
              accessibility with state-of-the-art security.
            </p>
          </div>
          <div className="info-card">
            <h3 className="info-title">Need Immediate Help?</h3>
            <p className="info-desc">
              If you have an urgent inquiry or need technical support for an
              existing installation, please give us a call.
            </p>
            <a href="tel:+917673927227" className="info-contact">
              <BsFillTelephoneOutboundFill style={{ marginRight: "10px" }} />
              <span>+91 7673927227</span>
            </a>
          </div>
          <div className="info-card">
            <h3 className="info-title">Custom Solutions</h3>
            <p className="info-desc">
              Don't see what you need? We specialize in building bespoke locker
              configurations for unique use cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
