import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import "./App.css";

function AppRouter() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route
            exact
            path="/"
            component={() => <Redirect from="/" to="/Home" />}
          />
        </Switch>
      </Router>
      <Button />
      <Footer />
    </div>
  );
}

export default AppRouter;
