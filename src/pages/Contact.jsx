
import "../css/Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/Contact-section.jsx";
// import HeroImg from '../assets/Solutions-images/Banner1.png';
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import Group from '../assets/Contact-images/Group.png';



export default function Contact() {



  return (
    <>
      <Header />


      <section className="contact-page-hero-section">

        <div className="contact-page-solution-left">
          <div className="contact-page-hero-section-contents">
            <h1 className="head-text-white">
              Get in Touch with SASE — Smart, Secure & Reliable Locker Solutions.
            </h1>

            <p className="para-text-white">
              Have questions or need assistance? Our team is here to help you with
              smart locker deployments, integrations, support, or custom solutions.
              Connect with us and experience seamless, secure, and tech-driven storage solutions.
            </p>
          </div>



        </div>

        <div className="contact-page-solution-right">
          <img className="contact-page-solution-hero-image" src={Group} alt="" />
        </div>

      </section>



      <ContactSection />







      <section className="contact-map-section">
        <div className="contact-map-section-contents-left">
          <div className="contact-map-section-contents-left-outer">


            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Call</h1>
              <a className="para-text" href="tel:+91 7673927227">
                +91 7673927227
              </a>
            </div>
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Our Location</h1>
              <p className="para-text" >
                Haksons Villas, 8-2-404, Road No.6, Green Valley, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          <div className="contact-map-section-contents-left-outer">
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Email</h1>
              <a className="para-text" href="mailto:parceldropnetworks@gmail">
                parceldropnetworks@gmail.com
              </a>
            </div>
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Social Networks</h1>

              <div className="social-media-icons">
                <a href="https://www.facebook.com">
                  <img src="https://img.icons8.com/color/40/000/facebook-new.png" alt="facebook" />
                </a>
                <a href="https://www.instagram.com">
                  <img src="https://img.icons8.com/color/40/000000/instagram-new.png" alt="instagram" />
                </a>
                <a href="https://twitter.com">
                  <img src="https://img.icons8.com/color/40/000000/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.linkedin.com">
                  <img src="https://img.icons8.com/color/40/000000/linkedin.png" alt="linkedin" />
                </a>

              </div>
            </div>

          </div>


        </div>

        <div className="contact-map-section-contents-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121796.99812957812!2d78.35156479999999!3d17.4522368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb977ccdabaddd%3A0x197148ae9648cfe2!2sCCCV%2BJC%20Haksons%20Villas%2C%208-2-404%2C%20Road%20No.6%2C%20Green%20Valley%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!3m2!1d17.4216145!2d78.44361239999999!5e0!3m2!1sen!2sin!4v1763532130140!5m2!1sen!2sin"

            style={{ border: 0 }}  // ← Object, not string
            allowFullScreen=""     // ← camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="sase map"  // ← Recommended for accessibility
          ></iframe>
        </div>
      </section>


      <Footer />
    </>
  );
}
