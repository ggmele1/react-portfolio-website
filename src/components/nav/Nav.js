import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink } from "react-router-hash-link";
import "../styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    position: "absolute",
    marginBottom: "1rem",
    zIndex: "10",
  },
  link: {
    fontSize: "1rem",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <HashLink className="nav-link" smooth to="/#home">
        Home
      </HashLink>
      <HashLink className="nav-link" smooth to="/#about">
        About
      </HashLink>
      <HashLink className="nav-link" smooth to="/#projects">
        Projects
      </HashLink>
      <HashLink className="nav-link" smooth to="/#contact">
        Connect
      </HashLink>
    </Grid>
  );
};
export default Nav;
