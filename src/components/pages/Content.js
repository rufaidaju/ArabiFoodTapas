import React from "react";
import { Link } from "react-router-dom";

import food6 from "../../assets/images/food6.jpg";
import food8 from "../../assets/images/food8.jpg";
import food7 from "../../assets/images/food7.jpg";
import tapas from "../../assets/images/tapas.png";

function Content() {
  return (
    <section id="content" className="content-container">
      <div className="box-cont">
        <p>
          ARABI FOOD er street food, når det er bedst. Når du nærmer dig ARABI
          FOOD, drages du af den varme duft af mellemøstlige krydderier og
          mærker straks en snigende sult efter et lækkert veltilberedt måltid
          eller måske en spændende snack….
        </p>
      </div>

      <div className="new-Pic-class">
        <img src={`${food6}`}  alt="food6" />
        <img src={`${food7}`}  alt="food7" />
        <img src={`${food8}`}  alt="food8" />
      </div>

      <div className="box-cont">
        <p>
          Ud over lækre syriske tapas kan du også få himmelske Falafler, lækker
          Sfeha, fantastisk Shish Kebab, fløjlsblød Hummus og en hel masse andre
          spændende syriske retter. Se vores <span><Link className="navbarItem" to="/gallery"> Galleri.</Link></span> 
        </p>
      </div>
      <div className="tapas" >
      <img src={`${tapas}`}  alt="tapas" />
      </div>
    </section>
  );
}

export default Content;
