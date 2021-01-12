import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-awesome-reveal";
import "../../styles.css";

const useStyles = makeStyles((theme) => ({
  main: {},
  imageWrapper: {
    maxWidth: "375px",
    width: "100%",
    "@media (min-width: 600px)": {
      width: "40%",
      minWidth: "500px",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    padding: "2rem",
  },
  video: {
    height: "660px",
    width: "auto",
    "@media (min-width: 600px)": {
      width: "600px",
      height: "auto",
    },
  },
  logoWrapper: {
    width: "80%",
    padding: "1rem",
    "@media (min-width: 700px)": {
      width: "40%",
    },
  },
  logo: {
    width: "100%",
    height: "auto",
    marginTop: "2rem",
  },
  loading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "1000px",
  },
  loadingIcon: {
    marginTop: "5rem",
    color: "black",
  },
}));

const Media = (props) => {
  const { project } = props.projectData;
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(false);
    timer();
    console.log("ran");
  }, [project]);

  const timer = () => {
    setTimeout(() => setDisplay(true), 1000);
  };

  return (
    <>
      {!display ? (
        <div className={classes.loading}>
          <CircularProgress className={classes.loadingIcon} />
        </div>
      ) : (
        <Grid container direction="row" justify="center" alignItems="center">
          {project.hasOwnProperty("logo") ? (
            <div className={classes.logoWrapper}>
              <Fade>
                <img
                  id="image"
                  className={classes.logo}
                  src={project.logo}
                  alt="logo"
                />
              </Fade>
            </div>
          ) : null}
          <Grid container direction="row" justify="center" alignItems="center">
            {project.hasOwnProperty("video") ? (
              <div className={classes.videoWrapper}>
                <Fade>
                  <img
                    id="image"
                    className={classes.video}
                    src={project.video}
                    alt="logo"
                  />
                </Fade>
              </div>
            ) : null}

            {project.media.map((asset) => (
              <div className={classes.imageWrapper}>
                <Fade>
                  <img className={classes.image} src={asset[1]} alt="app" />
                </Fade>
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default Media;
