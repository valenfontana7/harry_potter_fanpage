import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Characters } from "./components";
import React, { useEffect, useState } from "react";

function App() {
  const [legitColor, setLegitColor] = useState(null);
  let colors = [
    "rgb(151,45,48)", // Gryffindor
    "rgb(0,126,79)", // Slytherin
    "rgb(248,192,0)", // Hufflepuff
    "rgb(36,56,117)", // Ravenclaw
  ];
  let color;
  let trueColor;
  const handleCheckHeaderValidity = async () => {
    if (Number(localStorage.getItem("prevColor")) === 0) {
      color = colors[1];
    } else if (Number(localStorage.getItem("prevColor")) === 1) {
      color = colors[2];
    } else if (Number(localStorage.getItem("prevColor")) === 2) {
      color = colors[3];
    } else if (Number(localStorage.getItem("prevColor")) === 3) {
      color = colors[0];
    }
    try {
      trueColor = colors.findIndex((el) => color === el);
      localStorage.setItem("prevColor", trueColor);
      setLegitColor(color);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCheckHeaderValidity();
  }, []);

  return legitColor ? (
    <Router>
      <Switch>
        <Route exact path="/" color={legitColor}>
          <Home color={legitColor} />
        </Route>
        <Route exact path="/characters">
          <Characters color={legitColor} />
        </Route>
      </Switch>
    </Router>
  ) : (
    <></>
  );
}

export default App;
