import React from "react";
import ReactPlayer from "react-player/vimeo";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { Fade } from "react-awesome-reveal";
import "../styles.css";

const useStyles = makeStyles((theme) => ({
  main: {},
  nameWrapper: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: "12vw",
    zIndex: "-10",
    "@media (min-width: 600px)": {
      fontSize: "10vw",
    },
  },
  wrapper: {
    marginTop: "5rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  videoWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    "@media (min-width: 600px)": {
      marginTop: "1rem",
      marginBottom: "1rem",
      marginLeft: "-8rem",
      marginRight: "-8rem",
    },
  },
  arrowLeft: {
    transform: "rotate(180deg)",
    fontSize: "5vw",
  },
  arrowWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

const Motion = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const data = {
    project: {
      name: "Motion Graphics",
      media: [
        ["video", "https://vimeo.com/483242717"],
        ["video", "https://vimeo.com/483242905"],
        ["video", "https://vimeo.com/483242942"],
        ["video", "https://vimeo.com/483242967"],
        ["video", "https://vimeo.com/483242793"],
        ["video", "https://vimeo.com/483242791"],
      ],
    },
  };

  const getPreviousProject = () => {
    history.push("/project/graphicdesign");
  };

  return (
    <div className={classes.wrapper}>
      <Fade>
        <div className={classes.nameWrapper}>
          <Typography variant="h1" className={classes.name}>
            {data.project.name}
          </Typography>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          {data.project.media.map((video) => (
            <div className={classes.videoWrapper}>
              <ReactPlayer url={video[1]} />
            </div>
          ))}
        </Grid>
        <Grid className={classes.arrowWrapper}>
          <TrendingFlatIcon className={classes.arrowLeft} />
          <button className="project-nav" onClick={() => getPreviousProject()}>
            Previous Project
          </button>
        </Grid>
      </Fade>
    </div>
  );
};
export default Motion;
