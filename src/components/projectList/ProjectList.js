import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Slide } from "react-awesome-reveal";
import "../styles.css";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "7rem",
    marginBottom: "5rem",
  },
  name: {
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: "25vw",
    zIndex: "-10",
    "@media (min-width: 600px)": {
      fontSize: "25vw",
      lineHeight: ".8em",
    },
  },
  smallHeader: {
    fontSize: "1rem",
    padding: "10px",
    lineHeight: "1.4rem",
    marginBottom: "-15px",
    "@media (min-width: 700px)": {
      letterSpacing: "-.1rem",
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
  },
  span: {
    fontWeight: "700",
  },
  span2: {
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: ".2rem",
  },
  designerLinks: {
    width: "100%",
    marginTop: "1rem",
    textAlign: "right",
  },
}));

const ProjectList = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const navigateToProject = (project) => {
    history.push(`/project/${project}`);
  };

  const motionProject = () => {
    history.push("/project/motion");
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.main}
    >
      <div id="projects"></div>
      <Fade triggerOnce>
        <Typography className="section-header" variant="h5">
          Projects
        </Typography>
      </Fade>
      <div className={classes.developerLinks}>
        <Fade triggerOnce>
          <Typography className={classes.smallHeader}>
            <span className={classes.span}>developer</span>{" "}
            <span className={classes.span2}>Selected Work</span>
          </Typography>
        </Fade>
        <Slide triggerOnce>
          <button
            className="project-link"
            onClick={() => navigateToProject("dopestdata")}
          >
            DopestData
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("spotmytaste")}
          >
            SpotMyTaste
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("xplor")}
          >
            xplor
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("hypepicks")}
          >
            hypepicks
          </button>
        </Slide>
      </div>
      <div className={classes.designerLinks}>
        <Fade triggerOnce>
          <Typography className={classes.smallHeader}>
            <span className={classes.span}>designer</span>{" "}
            <span className={classes.span2}>Selected Work</span>
          </Typography>
        </Fade>
        <Slide direction="left" triggerOnce>
          <button
            className="project-link"
            onClick={() => navigateToProject("nightliferesidents")}
          >
            Nightlife
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("nightswim")}
          >
            Night Swim
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("artofthewild")}
          >
            Art Of The Wild
          </button>
          <button className="project-link" onClick={() => motionProject()}>
            Motion Graphic
          </button>
          <button
            className="project-link"
            onClick={() => navigateToProject("graphicdesign")}
          >
            Graphic Design
          </button>
        </Slide>
      </div>
    </Grid>
  );
};

export default ProjectList;
