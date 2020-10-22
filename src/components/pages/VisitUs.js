import React from "react";
import Map from "./Map.js";
import mobile from "../../assets/icons/mobile-app.png";
import email from "../../assets/icons/email.png";
import address from "../../assets/icons/location-pin.png";
import facebook from "../../assets/icons/facebook-blue.png";

function VisitUs() {
  return (
    <div className="visitUs">
      <Map />
      <h1>Besøg Os</h1>
      <div className="contact-container">
        <div className="cont">
          <h2>Kontakt</h2>
          <div>
            <div className="contact-info">
            <img src={`${mobile}`} alt="" />

              <p>81 71 60 64</p>
            </div>
            <div className="contact-info">
            <img src={`${email}`} alt="" />

              <p>reemmsh1223@gmail.com</p>
            </div>
            <div className="contact-info">
            <img src={`${address}`} alt="" />

              <p>Værftets Madmarked, Ny Kronborgvej 2, 3000 Helsingør</p>

            </div>
            <div className="contact-info">
              <img src={`${facebook}`} alt="" />
              <span>
                <a
                  href="https://www.facebook.com/ArabiFoodTapas "
                  target="_blank"
                >
                  {" "}
                  ArabiFoodTapas{" "}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="cont">
          <h2>Åbningstider</h2>
          <div>
            <p> Monday Tuesday Saturday: 11:00 AM - 8:00 PM </p>
            <p> Wednesday Thursday: 9:00AM - 5:00 PM </p>
            <p> Friday: 11:00 AM - 10:00 PM </p>
            <p> Sunday: 11:00 AM - 6:00 PM </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
