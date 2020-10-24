import React from "react";

import Untitled1 from "../../assets/images/Untitled1.png";
import menuList from "../../assets/images/menuList.jpg";

function Content() {
  return (
    <section id="content" className="content-container">
      <div className="box-cont">
        <h3>
          ARABI FOOD er street food, når det er bedst. Ud over lækre syriske
          tapas kan du også få himmelske Falafler, lækker Sfeha, fantastisk
          Shish Kebab, fløjlsblød Hummus og en hel masse andre spændende syriske
          retter.
        </h3>
        <img src={`${Untitled1}`} alt="" />
      </div>

      <div className="box-cont">
        <img src={`${menuList}`} alt="" />
        <h3>
          Når du nærmer dig ARABI FOOD, drages du af den varme duft af
          mellemøstlige krydderier og mærker straks en snigende sult efter et
          lækkert veltilberedt måltid eller måske en spændende snack….
        </h3>
      </div>
    </section>
  );
}

export default Content;
