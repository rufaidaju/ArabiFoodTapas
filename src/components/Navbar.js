import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavigationBar() {
  return (
    <section id="navigation" className="navbar">
      <div className="navbar-container">
        <img src={`${logo}`} alt="logo" />

        <ul>
          <li>
            <Link className="navbarItem" to="/home">
              Forside
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
    </section>
  );
}

export default NavigationBar;
