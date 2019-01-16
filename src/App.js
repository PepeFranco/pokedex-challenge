import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Poke from "./Poke";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/poke/:id" exact component={Poke} />
    </div>
  </Router>
);

export default App;
