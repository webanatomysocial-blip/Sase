import "../css/Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/Contact-section.jsx";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import Group from "../assets/Contact-images/Group.png";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="contact-page-hero-section">
        <div className="contact-page-solution-left">
          <div className="contact-page-hero-section-contents">
            <h1 className="head-text-white">
              Get in Touch with SASE — Smart, Secure & Reliable Locker
              Solutions.
            </h1>

            <p className="para-text-white">
              Have questions or need assistance? Our team is here to help you
              with smart locker deployments, integrations, support, or custom
              solutions. Connect with us and experience seamless, secure, and
              tech-driven storage solutions.
            </p>
          </div>
        </div>

        <div className="contact-page-solution-right">
          <img
            className="contact-page-solution-hero-image"
            src={Group}
            alt=""
          />
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
              <h1 className="head-text">Email</h1>
              <a className="para-text" href="mailto:parceldropnetworks@gmail">
                parceldropnetworks@gmail.com
              </a>
            </div>
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Social Networks</h1>

              <div className="social-media-icons">
                <a href="https://www.facebook.com">
                  <FaFacebookF className="social-media-icon" />
                </a>
                <a href="https://www.instagram.com/sase.tech?igsh=dWZtaW9leXZqdDcw&utm_source=ig_contact_invite">
                  <FaInstagram className="social-media-icon" />
                </a>
                <a href="http://www.linkedin.com/in/parcel-drop-8319aa392">
                  <FaLinkedin className="social-media-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-section-contents-left-outer">
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Manufacturers Location</h1>
              <p className="para-text">
                Hexive Technologies pvt Ltd<br/>
                49, Phase III, IOCL, Cherlapalli, Secunderabad, Telangana 500051
              </p>
              <div className="mobile-map-container">
                <iframe
                  src="https://maps.google.com/maps?q=Hexive+Technologies+pvt+Ltd+49,+Phase+III,+IOCL,+Cherlapalli,+Secunderabad,+Telangana+500051&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manufacturers Location Map Mobile"
                ></iframe>
              </div>
            </div>
            <div className="contact-map-section-contents-left-inner">
              <h1 className="head-text">Warehouse Location</h1>
              <p className="para-text">
                154, Chengicherla Village, Medipally Mandal, Medchal-malkajgiri district, Telangana
              </p>
              <div className="mobile-map-container">
                <iframe
                  src="https://maps.google.com/maps?q=154,+Chengicherla+Village,+Medipally+Mandal,+Medchal-malkajgiri+district,+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Warehouse Location Map Mobile"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map-section-contents-right">
          <div className="map-container">
            <h2 className="map-title">Manufacturers</h2>
            <iframe
              src="https://maps.google.com/maps?q=Hexive+Technologies+pvt+Ltd+49,+Phase+III,+IOCL,+Cherlapalli,+Secunderabad,+Telangana+500051&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manufacturers Location Map"
            ></iframe>
          </div>
          <div className="map-container">
            <h2 className="map-title">Warehouse</h2>
            <iframe
              src="https://maps.google.com/maps?q=154,+Chengicherla+Village,+Medipally+Mandal,+Medchal-malkajgiri+district,+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Warehouse Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
