import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavigationBar() {
  return (
    <div className="navbar">
    <div className="navbar-container">
      <img src={`${logo}`} width="350px" alt="" width="150px" />

      <ul>
        <li>
          <Link className="navbarItem" to="/">
            Forside
          </Link>
        </li>
        <li>
          <Link className="navbarItem"z to="/contact">
            Kontakt
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
        {/* <li ><Link className='navbarItem' to='/contact' > Kontakt</Link></li> */}
      </ul>
    </div>
    </div>
  );
}

export default NavigationBar;
