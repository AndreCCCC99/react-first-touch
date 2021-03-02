import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Navbar from "./Components/Navbar"


//hooks só podem ser usados em function components
//não funcionam em class components
// os hooks correm ordenadamente
// tem de estar dentro da função

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//useState(4) default state 4
//const [count, setCount] = useState(4) primeiro indice é o valor associado / o segundo indice serve para associar um valor

function App() {
  const [count, setCount] = useState(4);

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Router>

    <Navbar/>

      <button onClick={decrement}>-</button>
      <span>0</span>
      <button>+</button>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
