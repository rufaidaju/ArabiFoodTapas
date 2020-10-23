import React from "react"
import Navbar from "../Navbar"
// import MainPage from "./MainPage"
import Content from "./Content"
import VisitUs from "./VisitUs"
import Footer from "../Footer"

function Home() {
  return (
    <div>
    <Navbar />
    {/* <MainPage /> */}
    <Content />
    <VisitUs />
    <Footer />
    </div>
  );
}

export default Home;
