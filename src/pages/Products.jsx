
import "../css/Products.css";
import { Link } from "react-router-dom";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroImg from '../assets/Products-image/villa_04.png';
import HeroImg2 from '../assets/Products-image/library_01.png';
import ProductsList from "../components/Products-list.jsx";

import AdvancedTechnology from "../components/Advanced-Technology.jsx";
import ContactSection from "../components/Contact-section.jsx";
import FAQ from "../components/FAQ.jsx";




export default function Products() {
    return (
        <>
            <Header />
            <section className="products-page-banner-section">
              <div className="products-page-banner-image-container">
                <img src={HeroImg} alt="Villa" srcset="" className="only-windows" />
                <p className="big-head-text only-mobile">
                        Explore Our <br /> Product Range
                    </p>
                <img src={HeroImg2} alt="Library" srcset="" />
              </div>


                <div className="products-page-banner-text-container">
                    <div className="products-page-banner-left-container">
                    <p className="big-head-text only-windows">
                        Explore Our <br /> Product Range
                    </p>
                    <p className="subheading-text only-windows">
                        2020 - 2025
                    </p>
                    </div>
                    <div className="products-page-banner-right-container">
                        <p className="para-text">
                        Discover our diverse product range, crafted with precision and innovation to meet your needs. 
                        From cutting-edge technology to timeless designs, our products are built to enhance your lifestyle
                        </p>

                        </ div>
                        </ div>


                 
                  </section>


<ProductsList />

 
          


            <AdvancedTechnology />


            <ContactSection marginTop="100px" marginBottom="100px" />

            <FAQ   />






            <Footer />
        </>
    )
}