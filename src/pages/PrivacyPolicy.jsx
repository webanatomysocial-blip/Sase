import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../css/PrivacyPolicy.css";

import FAQ from "../components/FAQ.jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="privacy-policy-page">
        <section className="privacy-policy-hero">
          <h1 className="head-text-white">Privacy Policy</h1>
          <p className="para-text-white" style={{ opacity: 0.8 }}>Last Updated: May 2026</p>
        </section>

        <section className="privacy-policy-content">
          <div className="privacy-policy-container">
            <h2 className="head-text">1. Introduction</h2>
            <p className="para-text">
              Welcome to SASE. We are committed to protecting your personal
              information and your right to privacy. If you have any questions or
              concerns about our policy or our practices with regards to your
              personal information, please contact us.
            </p>

            <h2 className="head-text">2. Information We Collect</h2>
            <p className="para-text">
              We collect personal information that you voluntarily provide to us
              when registering at the Services, expressing an interest in
              obtaining information about us or our products and services, or
              otherwise contacting us.
            </p>
            <ul className="para-text">
              <li>
                <strong>Smart Locker Usage:</strong> We may collect data related to
                locker access, including timestamps and duration of use, to
                ensure security and operational efficiency.
              </li>
              <li><strong>Contact Data:</strong> Name, email, and phone number.</li>
              <li>
                <strong>Credentials:</strong> Passwords and similar security
                information.
              </li>
            </ul>

            <h2 className="head-text">3. How We Use Your Information</h2>
            <p className="para-text">
              We use personal information collected via our Services for a variety
              of business purposes described below. We process your personal
              information for these purposes in reliance on our legitimate
              business interests, in order to enter into or perform a contract
              with you, with your consent, and/or for compliance with our legal
              obligations.
            </p>

            <h2 className="head-text">4. Will Your Information Be Shared?</h2>
            <p className="para-text">
              We only share information with your consent, to comply with laws, to
              provide you with services, to protect your rights, or to fulfill
              business obligations.
            </p>

            <h2 className="head-text">5. Security of Your Information</h2>
            <p className="para-text">
              We use administrative, technical, and physical security measures to
              help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </p>

            <h2 className="head-text">6. Contact Us</h2>
            <p className="para-text">
              If you have questions or comments about this policy, you may email
              us at support@sase.tech or by post to our physical address.
            </p>
          </div>
        </section>
        <FAQ background="#f9f9f9" />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
