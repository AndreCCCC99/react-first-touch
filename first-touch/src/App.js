import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Random from "./Views/Random";
import Navbar from "./Components/Navbar";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {


  return (
    <Router>

      <Navbar/>      

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Random">
          <Random />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
