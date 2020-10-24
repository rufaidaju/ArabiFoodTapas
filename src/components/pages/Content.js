import React from "react";

import food6 from "../../assets/images/food6.jpg";
import food8 from "../../assets/images/food8.jpg";
import food7 from "../../assets/images/food7.jpg";
import reem5 from "../../assets/images/Reem5.jpeg";
import tapas from "../../assets/images/tapas.png";

function Content() {
  return (
    <section id="content" className="content-container">
      <div className="box-cont">
        <h3>
          ARABI FOOD er street food, når det er bedst. 
          Når du nærmer dig ARABI FOOD, drages du af den varme duft af
          mellemøstlige krydderier og mærker straks en snigende sult efter et
          lækkert veltilberedt måltid eller måske en spændende snack….
        </h3>
      </div>
      <div className="new-Pic-class">
        <img src={`${food6}`} width={"350px"} alt="" />
        <img src={`${food7}`} width={"350px"} alt="" />
        <img src={`${food8}`} width={"350px"} height={"350"} alt="" />
      </div>
      <div className="box-cont">
        <h3>
        Ud over lækre syriske
          tapas kan du også få himmelske Falafler, lækker Sfeha, fantastisk
          Shish Kebab, fløjlsblød Hummus og en hel masse andre spændende syriske
          retter.
          
        </h3>
      </div>
      <img className="tapas" src={`${tapas}`} width={"350px"} alt="" />
    </section>
  );
}

export default Content;
