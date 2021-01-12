import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import "../styles.css";

const useStyles = makeStyles((theme) => ({
  main: {
    "@media (min-width: 600px)": {
      marginTop: "4rem",
    },
  },
  grid: {
    m: 1,
    padding: "25px",
    border: 1,
    borderColor: "#000",
  },
  link: {
    letterSpacing: ".1rem",
    padding: "10px 10px 0px 10px",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "1rem",
  },
  connect: {
    marginTop: "1rem",
    "@media (min-width: 600px)": {
      marginBottom: "3rem",
    },
  },
  footer: {
    marginBottom: "2rem",
  },
  copyright: {
    marginTop: "1rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      {" "}
      <Grid
        className={classes.main}
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid
          className={classes.main}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div id="contact"></div>
          <Typography variant="h5" className="section-header">
            Connect
          </Typography>
          <a className={classes.link} href="mailto:ggmele1@gmail.com">
            ggmele1@gmail.com
          </a>
        </Grid>
        <Grid
          border={1}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.connect}
        >
          <a
            className={classes.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ggmele1"
          >
            Github
          </a>
          <a
            className={classes.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.behance.net/giuseppemele"
          >
            BEHANCE
          </a>
          <a
            className={classes.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ggmele1/"
          >
            LinkedIn
          </a>
          <a
            className={classes.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://codepen.io/ggmele1"
          >
            CodePen
          </a>
        </Grid>
      </Grid>
      <Grid
        className={classes.footer}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid
            className={classes.grid}
            xs={12}
            container
            direction="row"
            justify="space-evenly"
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
          <Typography className={classes.copyright} variant="body1">
            © Giuseppe Mele 2020
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
