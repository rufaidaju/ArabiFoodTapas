import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
// import ErrorPage from "./components/pages/ErrorPage";
import Content from "./components/pages/Content";
import "./App.css";
import VisitUs from "./components/pages/VisitUs";

function AppRouter() {
  return (
    <div className="App">

 <Router>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/content" component={Content} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={VisitUs} />
    <Route path="/about" component={About} />
    {/* <Route component={ErrorPage} /> */}
  </Switch>
 
</Router>
<Footer />
    </div>
  );
}

export default AppRouter;

