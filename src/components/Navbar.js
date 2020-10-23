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
            <a href="#forside"> 
              Forside
            </a>
          </li>
          <li>
            <a href="#content"> 
              Content
            </a>
          </li>
          <li>
            <a href="#visit-us"> 
              Visit Us
            </a>
          </li>
          <li>
            <a href="#contact-us"> 
              Kontakt
            </a>
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
          {/* <li ><Link className='navbarItem' to='/contact' > Kontakt</Link></li> */}
        </ul>
      </div>
    </section>
  );
}

export default NavigationBar;
