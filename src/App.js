import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Home from "./Home";
import Poke from "./Poke";
import Paper from "@material-ui/core/Paper";

const styles = { root: { margin: "10px" } };

const App = ({ classes }) => (
  <Router>
    <Paper className={classes.root}>
      <Route path="/" exact component={Home} />
      <Route path="/poke/:id" exact component={Poke} />
    </Paper>
  </Router>
);

export default withStyles(styles)(App);
