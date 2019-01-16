import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  table: {
    maxWidth: "90%"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/").then(response => {
      response.json().then(data => {
        const pokemon = data.results.slice(0, 807).map(poke => {
          const { name } = poke;
          return {
            ...poke,
            name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`
          };
        });
        this.setState({ pokemon });
      });
    });
  }

  render() {
    const { pokemon } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center" />
              <TableCell>Pokemon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemon.map((poke, index) => (
              <TableRow key={poke.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                      1}.png`}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {poke.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(App);
