import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../styles.css";
import Information from "./information/Information";
import Media from "./media/Media";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    marginTop: "1rem",
    marginBottom: "4rem",
    "@media (min-width: 600px)": {
      marginTop: "6rem",
      marginBottom: "2rem",
    },
  },
  arrowLeft: {
    transform: "rotate(180deg)",
    fontSize: "10vw",
    marginRight: "-6px",
    "@media (min-width: 600px)": {
      fontSize: "8vw",
    },
  },
  arrowRight: {
    fontSize: "10vw",
    marginLeft: "-6px",
    "@media (min-width: 600px)": {
      fontSize: "8vw",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    "@media (min-width: 600px)": {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Project = (props) => {
  const { getProject, currentProject, projectData, data } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getProject(location.pathname);
  }, [location]);

  const getNextProject = () => {
    let nextProject = data[currentProject + 1].project.pathname;
    getProject(nextProject);
    history.push(nextProject);
  };

  const getPreviousProject = () => {
    let previousProject = data[currentProject - 1].project.pathname;
    getProject(previousProject);
    history.push(previousProject);
  };

  const motionProject = () => {
    history.push("/project/motion");
  };

  return (
    <>
      {projectData ? (
        <>
          <Information projectData={props.projectData} />
          <Media projectData={props.projectData} />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className={classes.main}
          >
            {currentProject === 0 ? null : (
              <Grid className={classes.wrapper}>
                <TrendingFlatIcon className={classes.arrowLeft} />
                <button
                  className="project-nav"
                  onClick={() => getPreviousProject()}
                >
                  Previous Project
                </button>
              </Grid>
            )}
            {currentProject === 7 ? (
              <Grid className={classes.wrapper}>
                <button className="project-nav" onClick={() => motionProject()}>
                  Next Project
                </button>
                <TrendingFlatIcon className={classes.arrowRight} />
              </Grid>
            ) : (
              <Grid className={classes.wrapper}>
                <button
                  className="project-nav"
                  onClick={() => getNextProject()}
                >
                  Next Project
                </button>
                <TrendingFlatIcon className={classes.arrowRight} />
              </Grid>
            )}
          </Grid>
        </>
      ) : null}
    </>
  );
};
export default Project;
