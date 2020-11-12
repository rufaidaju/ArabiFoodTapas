import React from "react";
import MainPage from "./MainPage";
import Content from "./Content";
import VisitUs from "./VisitUs";

function Home() {
  return (
    <div id="forside">
      <MainPage />
      <Content />
      <VisitUs />
    </div>
  );
}

export default Home;
