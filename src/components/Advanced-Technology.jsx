
import secure from '../assets/Products-image/advance/secure.png';
import secure1 from '../assets/Products-image/advance/62.png';
import secure2 from '../assets/Products-image/advance/63.png';


export default function AdvancedTechnology() {
    return (
        <>


            <section className="AdvancedTechnology-section">
                <p className="head-text" style={{ textAlign: "center" }}>
                    Advanced Technology Built Into Every Unit
                </p>
                <div className="AdvancedTechnology-cards-container">

                    < div className="AdvancedTechnology-card">
                        <img src={secure1} alt="" srcset="" />

                        <p className="subheading-text">
                            Unified Software
                        </p>
                        <p className="para-text">
                           Remote management, real-time reporting, and automated updates.

                        </p>


                    </ div>
                    < div className="AdvancedTechnology-card">

                        <img src={secure2} alt="" srcset="" />
                        <p className="subheading-text">
                            Security
                        </p>
                        <p className="para-text">
                           Integrated surveillance and multi-factor access options (PIN, App, QR).

                        </p>


                    </ div>
                    < div className="AdvancedTechnology-card">
                        <img src={secure} alt="" srcset="" />

                        <p className="subheading-text">
                            Quality
                        </p>
                        <p className="para-text">
                            High-gauge steel construction and robust electronic locking mechanisms.

                        </p>


                    </ div>

                </div>
            </section>




        </>
    );

}