import React from "react";
import SliderList from "./Slider.js";
import VisitUs from "./VisitUs";
import Menu from "./Menu";

import food3 from "../../assets/images/food3.jpg";
import reem6 from "../../assets/images/Reem6.jpeg";
import Untitled1 from "../../assets/images/Untitled1.png";
import reem1 from "../../assets/images/Reem1.jpeg";

function Home() {
  return (
    <div className="container">
      <SliderList />
      <div className="middle-cont">
        <div>
          <div className="box-cont">
            <h3>
              Her laves syrisk tapas med stor passion og masser af kærlighed. En
              stadeplads hvor syrisk tapas laves med stor passion og masser af
              kærlighed.
            </h3>
          </div>

          <div className="box-cont">
            <h3>
              {" "}
              ARABI FOOD er street food, når det er bedst. Ud over lækre syriske
              tapas kan du også få himmelske Falafler, lækker Sfeha, fantastisk
              Shish Kebab, fløjlsblød Hummus og en hel masse andre spændende
              syriske retter.
            </h3>
          </div>
          <div className="box-cont">
            <h3>
              {" "}
              Når du nærmer dig ARABI FOOD, drages du af den varme duft af
              mellemøstlige krydderier og mærker straks en snigende sult efter
              et lækkert veltilberedt måltid eller måske en spændende snack….
            </h3>
          </div>
        </div>

        <div>
          <img src={`${Untitled1}`} alt="" />
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}

      <div className="circle-container">
        <img src={`${reem1}`} alt="" />

        <img src={`${reem6}`} alt="" />

        <img src={`${food3}`} alt="" />
      </div>

      <Menu />
      <VisitUs />
    </div>
  );
}

export default Home;
