import React from 'react';
import '../css/Business.css';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const Business = () => {
  return (
    <section className="carousel-section only-windows">
      <div className="carousel-section-head-text-container">
        <p className="head-text">Unlock Efficiency for <br /> Your Business.</p>
        <p className="para-text">
          SASE smart lockers adapt to every space, improving security, convenience, and productivity. <br /> From homes to retail hubs, our technology simplifies delivery management for all.
        </p>
      </div>

      <div className="carousel-slides">
        <div className="carousel-slide slide1">
          <div className="overlay">
            <div className="inner-box-car">
              <h2 className="car-section-head">Residential</h2>
              <p className="car-section-para">
                Deliver 24/7 parcel access, reduce staff workload, <br /> and eliminate missed deliveries—enhancing security, <br /> comfort, and everyday living for all residents.
              </p>
            </div>
            <div className="cta-section car-section-link">
              <Link to="/solutions#tabs-section" className="btn-primary">
                Find Your Solution
                <IoArrowForward className="btn-primary__arrow" />
              </Link>
            </div>
          </div>
        </div>

      

        <div className="carousel-slide slide3">
          <div className="overlay">
            <div className="inner-box-car">
              <h2 className="car-section-head">Corporate Offices</h2>
              <p className="car-section-para">
                Streamline mail, IT assets, and deliveries  <br /> with SASE lockers—bringing order, traceability, <br /> and security to every workplace for smoother operations.
              </p>
            </div>
            <div className="cta-section car-section-link">
              <Link to="/solutions#tabs-section" className="btn-primary">
                Find Your Solution
                <IoArrowForward className="btn-primary__arrow" />
              </Link>
            </div>
          </div>
        </div>

          <div className="carousel-slide slide2">
          <div className="overlay">
            <div className="inner-box-car">
              <h2 className="car-section-head">Educational Institutes</h2>
              <p className="car-section-para">
                Simplify campus logistics with secure lockers  <br /> for books, devices, and packages—offering safe,  <br />self-service access to students and faculty all day.
              </p>
            </div>
            <div className="cta-section car-section-link">
              <Link to="/solutions#tabs-section" className="btn-primary">
                Find Your Solution
                <IoArrowForward className="btn-primary__arrow" />
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-slide slide4">
          <div className="overlay">
            <div className="inner-box-car">
              <h2 className="car-section-head">Gyms</h2>
              <p className="car-section-para">
                Offer contactless storage and order pickup <br /> for members—providing safety, ease, and reliability <br />while  enhancing overall gym experience and trust.
              </p>
            </div>
            <div className="cta-section car-section-link">
              <Link to="/solutions#tabs-section" className="btn-primary">
                Find Your Solution
                <IoArrowForward className="btn-primary__arrow" />
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-slide slide5">
          <div className="overlay">
            <div className="inner-box-car">
              <h2 className="car-section-head">Malls</h2>
              <p className="car-section-para">
                Enable faster click-and-collect, returns,  <br /> and storage with SASE lockers—creating a smooth,  <br />contactless,  and connected retail experience for everyone.
              </p>
            </div>
            <div className="cta-section car-section-link">
              <Link to="/solutions#tabs-section" className="btn-primary">
                Find Your Solution
                <IoArrowForward className="btn-primary__arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
