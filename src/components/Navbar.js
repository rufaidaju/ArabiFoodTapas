import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavigationBar() {
  return (
    <section className="navbar">
      <div className="navbar-container">
        <img src={`${logo}`} width="350px" alt="" width="150px" />

        <ul>
          <li>
            <Link className="navbarItem" to="/">
              Forside
            </Link>
          </li>
          <li>
            <Link className="navbarItem" to="/contact">
              Besøg os
            </Link>
          </li>
          <li>
            <Link className="navbarItem" to="/gallery">
              {" "}
              Galleri
            </Link>
          </li>
          <li>
            <Link className="navbarItem" to="/about">
              {" "}
              Om os
            </Link>{" "}
          </li>
        </ul>
     
      </div>

      <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>

    </section>
  );
}

export default NavigationBar;
