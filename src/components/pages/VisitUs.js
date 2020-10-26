import React from "react";
import Map from "./Map.js";
import mobile from "../../assets/icons/phone.png";
import email from "../../assets/icons/mail.png";
import address from "../../assets/icons/location.png";
import facebook from "../../assets/icons/facebook.png";
import time from "../../assets/icons/time.png";
import cvr from "../../assets/icons/cvr.png";
import reemRestaurant1 from "../../assets/images/ReemRestaurant1.jpg";

function VisitUs() {
  return (
    <section className="visitUs">
      <h2>Besøg os</h2>
      <p>Kom forbi og besøg os. Vi glæder os til at lave mad til dig!</p>

      <Map />

      <div className="contact-container">
        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${address}`} alt="addressIcon" />
              <a
                href="https://g.page/VaerftetsMadmarked?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Ny Kronborgvej 2, 3000 Helsingør</span>
              </a>
            </div>

            <div className="contact-info">
              <img src={`${facebook}`} alt="facebookIcon" />
              <span>
                <a
                  href="https://www.facebook.com/ArabiFoodTapas "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>facebook.com/ArabiFoodTapas</span>{" "}
                </a>
              </span>
            </div>

            <div className="contact-info">
              <img src={`${email}`} alt="emailIcon" />
              <a href="mailto:reemmsh1223@gmail.com?subject=Inquiry about products">
                <span>reemmsh1223@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${mobile}`} alt="mobileIcon" />

              <span>+45 81 71 60 64</span>
            </div>

            <div className="contact-info">
              <img src={`${time}`} alt="timeIcon" />

              <span> 11:00 - 20:00 </span>
            </div>
            <div className="contact-info">
              <img src={`${cvr}`} alt="cvrIcon" />

              <spanp> 39447630</spanp>
            </div>
          </div>
        </div>
        <div className="resturant-img">
          <img src={`${reemRestaurant1}`} alt="reemRestaurant1" />
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
