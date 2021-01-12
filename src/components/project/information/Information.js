import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles.css";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles((theme) => ({
  main: { alignText: "center", marginTop: "3rem" },
  nameWrapper: {
    marginTop: "1rem",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    margin: "1rem",
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: "12vw",
    "@media (min-width: 600px)": {
      fontSize: "10vw",
    },
  },
  infoWrapper: {
    maxWidth: "1000px",
    "@media (min-width: 600px)": {
      padding: "0 1rem 0 1rem",
    },
  },
  smallHeader: {
    fontSize: "1rem",
    padding: "10px",
    lineHeight: "1.4rem",
    "@media (min-width: 700px)": {
      letterSpacing: "-.05rem",
      fontSize: "1.5rem",
      lineHeight: "2.8rem",
    },
  },
  span: {
    letterSpacing: ".08rem",
    fontWeight: "400",
  },
  span2: {
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: ".2rem",
  },
}));

const Information = (props) => {
  const { project } = props.projectData;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.main}
    >
      <div className={classes.nameWrapper}>
        <Fade>
          <Typography variant="h1" className={classes.name}>
            {project.name}
          </Typography>
        </Fade>
      </div>
      <Fade>
        <div className={classes.infoWrapper}>
          <Typography className={classes.smallHeader}>
            <span className={classes.span2}>Project:</span>{" "}
            <span className={classes.span}>{project.name}</span>{" "}
          </Typography>

          {project.hasOwnProperty("link1") ? (
            <>
              <Typography className={classes.smallHeader}>
                <span className={classes.span2}>Live Site:</span>{" "}
                <span className={classes.span}>
                  <a
                    href={project.link1}
                    target="_blank"
                    rel="noreference noreferrer"
                  >
                    {project.name}.com
                  </a>
                </span>{" "}
              </Typography>
            </>
          ) : null}
          {project.hasOwnProperty("link2") ? (
            <Typography className={classes.smallHeader}>
              <span className={classes.span2}>GitHub:</span>{" "}
              <span className={classes.span}>
                {" "}
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noreference noreferrer"
                >
                  github.com/ggmele1/{project.name}
                </a>
              </span>{" "}
            </Typography>
          ) : null}

          {project.hasOwnProperty("tech") ? (
            <Typography className={classes.smallHeader}>
              <span className={classes.span2}>tech:</span>{" "}
              <span className={classes.span}>{project.tech}</span>{" "}
            </Typography>
          ) : null}
          {project.hasOwnProperty("description") ? (
            <Typography className={classes.smallHeader}>
              <span className={classes.span2}>description:</span>{" "}
              <span className={classes.span}>{project.description}</span>{" "}
            </Typography>
          ) : null}
        </div>
      </Fade>
    </Grid>
  );
};

export default Information;
