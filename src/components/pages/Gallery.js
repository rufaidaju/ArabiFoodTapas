import React from "react";

import reem2 from "../../assets/images/Reem2.jpeg";
import reem3 from "../../assets/images/Reem3.jpeg";
import reem6 from "../../assets/images/Reem6.jpeg";
import food1 from "../../assets/images/food1.jpg";
import food3 from "../../assets/images/food3.jpg";
import food4 from "../../assets/images/food4.jpg";
import food5 from "../../assets/images/food5.jpg";
import food6 from "../../assets/images/food6.jpg";
import food7 from "../../assets/images/food7.jpg";
import food8 from "../../assets/images/food8.jpg";
import food9 from "../../assets/images/food9.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import lovedamas from "../../assets/images/lovedamas.jpg";
import reemRestaurant3 from "../../assets/images/ReemRestaurant3.jpg";
import food10 from "../../assets/images/image6.jpg";
import food11 from "../../assets/images/food2.jpg";
 import food12 from "../../assets/images/menuList.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Galleri</h2>
      <div className="gallery-container">
        <div className="gallery-group ">
        <img src={`${reem2}`} alt="reem2" />
          <img src={`${reem3}`} alt="reem3" />
          <img src={`${reem6}`} alt="reem6" />
          <img src={`${food8}`} alt="food8" />
          <img src={`${food1}`} alt="food1" />
          <img src={`${food3}`} alt="food3" />
          <img src={`${food4}`} alt="food4" />
          <img src={`${food5}`} alt="food5" />
          <img src={`${food6}`} alt="food6" />
          <img src={`${food7}`} alt="food7" />
          <img src={`${food9}`} alt="food9" />
          <img src={`${kitchen}`} alt="kitchen" />
          <img src={`${lovedamas}`} alt="lovedamas" />
          <img src={`${reemRestaurant3}`} alt="reemRestaurant3" />
          <img src={`${food10}`} alt="food10" />
          <img src={`${food11}`} alt="food11" />
          <img src={`${food12}`} alt="food12" />
          
        </div>
      </div>
    </section>
  );
}

export default Gallery;