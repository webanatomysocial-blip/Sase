
import secure from '../assets/Products-image/advance/secure.png';
import secure1 from '../assets/Products-image/advance/62.png';
import secure2 from '../assets/Products-image/advance/63.png';


export default function AdvancedTechnology() {
    return (
        <>


           <section className="AdvancedTechnology-section">
        <p className="head-text" style={{ textAlign: "center" }}>
          Key Features
        </p>

        <div className="AdvancedTechnology-cards-container">

          {/* 1 – Smart Digital Interface */}
          <div className="AdvancedTechnology-card">
            <img src={secure1} alt="Smart Digital Interface" />
            <p className="subheading-text">Smart Digital Interface</p>
            <p className="para-text">
              Central touchscreen for easy user access and management.
            </p>
          </div>

          {/* 2 – Modular & Scalable */}
          <div className="AdvancedTechnology-card">
            <img src={secure2} alt="Modular and Scalable" />
            <p className="subheading-text">Modular &amp; Scalable</p>
            <p className="para-text">
              Connect multiple locker units to one main control system.
            </p>
          </div>

          {/* 3 – Secure Construction */}
          <div className="AdvancedTechnology-card">
            <img src={secure} alt="Secure Construction" />
            <p className="subheading-text">Secure Construction</p>
            <p className="para-text">
              Galvannealed steel body with stainless-steel latching and tamper-resistant design.
            </p>
          </div>

          {/* 4 – Indoor & Outdoor Options */}
          <div className="AdvancedTechnology-card">
            <img src={secure1} alt="Indoor and Outdoor Options" />
            <p className="subheading-text">Indoor &amp; Outdoor Options</p>
            <p className="para-text">
              Optional weather-resistant kits, camera integration, and roof protection for outdoor installations.
            </p>
          </div>

          {/* 5 – Power & Network Ready */}
          <div className="AdvancedTechnology-card">
            <img src={secure2} alt="Power and Network Ready" />
            <p className="subheading-text">Power &amp; Network Ready</p>
            <p className="para-text">
              Integrated router, backup battery, and surge protection for uninterrupted operation.
            </p>
          </div>

          {/* 6 – Custom Finishes */}
          <div className="AdvancedTechnology-card">
            <img src={secure} alt="Custom Finishes" />
            <p className="subheading-text">Custom Finishes</p>
            <p className="para-text">
              Available in Black, Brown, Blue, Green, and Beige. Custom colours and designs available on request.
            </p>
          </div>

        </div>
      </section>



        </>
    );

}