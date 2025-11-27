import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../css/AboutUs-Page.css'
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
// import box from '../assets/Solutions-images/layer1.png'
import FAQ from '../components/FAQ.jsx';
import HeroImg from '../assets/Home-images/Why-Choose-images/2.png';
import LOGOS from '../assets/About-images/logo.png';



export default function About() {
    return (
        <>

            <Header />
            <section className="about-page-hero-section">
                <div className="about-page-hero-section-left">
                    <p className="head-text-white">
                        Reliable People. <br /> Remarkable Products.
                    </p>
                    <div className="cta-wrapper-left">
                        <Link to="/contact" className="find-btn">
                            Find Your Solution <IoArrowForward className="arrow-icon" />
                        </Link>
                    </div>
                </div>
            </section>





            <section className="about-us-page-certificates-section">
                <div className="about-us-page-certificates-container-left-right">
                    <div className="about-us-page-certificates-box-text">

                        <p className="para-text">
At SASE, we redefine the management of deliveries, pickups, and storage. Our intelligent locker systems introduce AI automation, security, and convenience across residential, commercial, and institutional environments. Engineered for flexibility and reliability, our lockers integrate seamlessly into any space, providing 24/7 access and comprehensive operational oversight. With advanced AI automation technology, modular designs, and real-time management tools, SASE smart lockers transform traditional logistics into a modern, effortless experience for residents, employees, couriers, and operators alike.                        </p>
                    </div>
                    <div className="about-us-page-certificates-box-img">
                        <img src={LOGOS} alt="" />
                    </div>
                </div>

            </section>





            <section className="about-us-page-yellow-section">
                <p className="para-text" style={{ textAlign: "center" }}>
                    At SASE, we believe in the power of innovation to transform lives. Our commitment to excellence drives us to create solutions that not only meet the demands of today but also anticipate the needs of tomorrow. Join us on our journey to redefine convenience and security in the modern world.
                </p>

                <p className="para-text" style={{ textAlign: "center" }}>
                    *Note Together, we can build a smarter, more connected future.
                </p>
            </section>



            <div className="locker-smart-section-last-section">
                <div className="locker-smart-left">
                    <div className="locker-smart-section-contents">
                        <h1 className="head-text">The Smart Choice for Your Next Project</h1>
                        <p className="para-text">
                            Let our experts help you scope, design, and implement the perfect locker system for your space and budget.
                        </p>
                    </div>

                    <div className="cta-wrapper-left">
                        <Link to="/contact" className="find-btn">
                            Find Your Solution <IoArrowForward className="arrow-icon" />
                        </Link>
                    </div>
                </div>

                <div className="locker-smart-right">
                    <img className="locker-solution-smart-img2" src={HeroImg} alt="" />
                </div>
            </div>



            <FAQ background="#ffffff" />

            <Footer />

        </>

    )
}