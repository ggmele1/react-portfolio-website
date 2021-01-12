import React from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gif from "./gif.gif";
import pdf from "./resume.pdf";
import "../styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    width: "100%",
    height: "100%",
    marginTop: "5rem",
    "@media (min-width: 700px)": {
      padding: "3rem",
      marginTop: "20rem",
    },
  },
  gifWrapper: {
    padding: ".5rem",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 2000px)": {
      marginTop: "10rem",
    },
  },
  gif: {
    width: "100%",
    height: "auto",
    maxWidth: "1200px",
  },
  headerWrapper: {
    width: "100%",
    textAlign: "right",
  },
  aboutText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    width: "100%",
    marginTop: "2rem",
    marginBottom: "4rem",
    maxWidth: "1200px",
    alignSelf: "center",
  },
  about: {
    padding: "0 1rem 1rem",
    fontSize: "1.2rem",
    lineHeight: "1.4rem",
    fontWeight: "700",
    "@media (min-width: 700px)": {
      letterSpacing: "-.1rem",
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    "@media (min-width: 1200px)": {
      letterSpacing: "-.1rem",
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
  },
  skillsWrapper: {
    marginTop: ".5em",
    padding: "10px",
    alignSelf: "center",
    width: "100%",
    "@media (min-width: 700px)": {
      marginTop: "5rem",
      width: "75%",
    },
  },
  smallHeader: {
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "10px",
    lineHeight: "1.4rem",
    "@media (min-width: 700px)": {
      letterSpacing: "-.1rem",
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
  },
  span2: {
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: ".2rem",
  },
  skills: {
    fontSize: "1rem",
    lineHeight: "1.4rem",
    fontWeight: "400",
    textAlign: "center",
    "@media (min-width: 700px)": {
      letterSpacing: "-.1rem",
      fontSize: "2.2rem",
      lineHeight: "3rem",
    },
  },
  span: {
    fontWeight: "700",
  },
  chipWrap: {
    marginTop: ".5rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chipWrap2: {
    marginTop: ".5rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    textAlign: "center",
    textTransform: "uppercase",
    margin: ".3rem",
    fontWeight: "700",
    "@media (min-width: 700px)": {
      borderRadius: "1.5rem",
      height: 50,
      fontSize: "25px",
      margin: "1rem",
    },
  },
  space: {
    margin: "3rem",
  },
  linkWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "2rem",
  },
  link: {
    alignSelf: "center",
    letterSpacing: ".1rem",
    padding: "10px 10px 0px 10px",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "2rem",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.main}>
      <div id="about"></div>
      {/* <div className="box"></div> */}

      <div>
        <div className={classes.gifWrapper}>
          <img src={gif} className={classes.gif} alt="giuseppe" />
        </div>

        <div className={classes.aboutText}>
          <Typography className="section-header" variant="h5">
            <span className="strike">Who AM I</span>
          </Typography>

          <Typography variant="body1" className={classes.about}>
            An incoming software developer
            <br />
            currently living in Phoenix, AZ who loves to turn ideas into
            beautiful interactive web/mobile applications. I’m a creator at
            heart and live for taking raw thoughts and building them to
            completion. I strive to write clean, reusable, and test-driven code.
            With a background in design, I enjoy css, animations and typography.{" "}
            <br /> <br />
            When I am not staring into a screen I like to ride my bike, hike,
            and do Yoga.
          </Typography>
        </div>
      </div>

      <div className={classes.skillsWrapper}>
        <Typography variant="body1" className={classes.smallHeader}>
          <span className={classes.span2}>Developer Skills</span>
        </Typography>
        <div className={classes.chipWrap}>
          <Chip className={classes.chip} label="JS" />
          <Chip className={classes.chip} label="React" />
          <Chip className={classes.chip} label="Redux" />
          <Chip className={classes.chip} label="html" />
          <Chip className={classes.chip} label="css" />
          <Chip className={classes.chip} label="node js" />
          <Chip className={classes.chip} label="express js" />
          <Chip className={classes.chip} label="PostgreSQL" />
          <Chip className={classes.chip} label="mongodb" />
          <Chip className={classes.chip} label="GIT" />
          <Chip className={classes.chip} label="Jest" />
          <Chip className={classes.chip} label="mocha" />
        </div>
        <div className={classes.space}></div>
        <Typography variant="body1" className={classes.smallHeader}>
          <span className={classes.span2}>Designer Skills</span>
        </Typography>
        <div className={classes.chipWrap2}>
          <Chip
            variant="outlined"
            className={classes.chip}
            label="Adobe photoshop"
          />
          <Chip
            variant="outlined"
            className={classes.chip}
            label="adobe illustrator"
          />
          <Chip
            variant="outlined"
            className={classes.chip}
            label="3d graphics"
          />
          <Chip
            variant="outlined"
            className={classes.chip}
            label="kinetic typography"
          />
          <Chip
            variant="outlined"
            className={classes.chip}
            label="adobe aftereffects"
          />
        </div>
        <div className={classes.linkWrap}>
          <a
            className={classes.link}
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </Grid>
  );
};
export default About;
