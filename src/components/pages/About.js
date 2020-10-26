import React from "react";
import reem7 from "../../assets/images/Reem7.jpg";

function About() {
  return (
    <section className="about-container">
      <h2>Om os</h2>
      <div className="about-info">
        <div className="about-text">
          <p>
            ARABI FOOD ligger på Værftets Madmarked, som ligger på Helsingørs
            gamle værft.
          </p>
          <p>
            En stadeplads hvor syrisk tapas laves med stor passion og masser af
            kærlighed.
          </p>
          <p>
            Reem Mushainesh, ejer af ARABI FOOD Reem kom til Danmark fra Syrien
            i 2015. I 2017 deltog hun i iværksætterprojektet Arabi-food og i
            foråret 2018 åbnede hun madvognen Arabi Food Tapas i en lånt madvogn
            på Madmarkedet i Helsingør.{" "}
          </p>
          <p>
            {" "}
            I foråret 2020 blev den lånte madvogn skiftet ud med en fast
            stadeplads “Arabi Food” på Madmarkedet i Helsingør.
          </p>
        </div>

        <img src={`${reem7}`} alt="reem7" />
      </div>
      <h3>Kom forbi og besøg os. Vi glæder os til at lave lækker mad til dig!</h3>
    </section>
  );
}

export default About;
