import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Characters } from "./components";
import React from "react";

function App() {
  let colors = [
    "rgb(151,45,48)", // Gryffindor
    "rgb(0,126,79)", // Slytherin
    "rgb(248,192,0)", // Hufflepuff
    "rgb(36,56,117)", // Ravenclaw
  ];
  let color = colors[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
  return (
    color && (
      <Router>
        <Switch>
          <Route exact path="/" color={color}>
            <Home color={color} />
          </Route>
          <Route exact path="/characters">
            <Characters color={color} />
          </Route>
        </Switch>
      </Router>
    )
  );
}

export default App;
