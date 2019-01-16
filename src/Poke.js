import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  image: { minHeight: "96px" }
};

class Poke extends Component {
  constructor() {
    super();
    this.state = {
      poke: {}
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      response.json().then(data => {
        console.log(data);
        const { name } = data;
        this.setState({
          poke: {
            ...data,
            name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`
          }
        });
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { poke } = this.state;
    console.log(poke);
    return (
      <Grid container spacing={16} direction="row">
        <Grid item xs={4} justify="center" container className={classes.image}>
          <img
            src={poke.sprites && poke.sprites.front_default}
            alt={poke.name}
          />
        </Grid>
        <Grid
          item
          xs={8}
          alignItems="center"
          container
          direction="column"
          justify="center"
        >
          <Grid>
            <Typography variant="headline">{poke.name}</Typography>
          </Grid>
          <Grid container direction="row" justify="space-evenly">
            {poke.types &&
              poke.types.map(type => {
                return (
                  <Grid>
                    <Typography variant="subheading">
                      {type.type.name}
                    </Typography>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Poke);
