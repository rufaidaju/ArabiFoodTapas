import React from "react";
import menuList from "../../assets/images/menuList.jpg";

function Menu() {
  return (
    <div className="menuList">
      <h2>Menu List</h2>
      <p>
        {" "}
        Vores MenuKort
      </p>
      <div>
        <img src={`${menuList}`} width="350px" alt="" />
      </div>
    </div>
  );
}

export default Menu;
