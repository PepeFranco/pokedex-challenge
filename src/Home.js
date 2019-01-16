import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

const styles = { image: { minWidth: "96px", padding: "0px" } };

class Home extends Component {
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center" className={classes.image} />
            <TableCell>Pokemon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.map((poke, index) => (
            <TableRow key={poke.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center" className={classes.image}>
                <img
                  alt={poke.name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                    1}.png`}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`poke/${index + 1}`}>{poke.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(Home);
