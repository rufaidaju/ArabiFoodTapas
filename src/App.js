import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Footer from "./components/Footer";
import "./App.css";
import VisitUs from "./components/pages/VisitUs";

function App() {
  return (
    <div className="App">

 <Router>
  <NavigationBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={VisitUs} />
    <Route path="/about" component={About} />
    <Route component={ErrorPage} />
  </Switch>
</Router>
<Footer /> 


    </div>
  );
}

export default App;

