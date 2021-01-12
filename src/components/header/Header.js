import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-awesome-reveal";
import "../styles.css";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: "95vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "",
    marginBottom: "10rem",
    "@media (min-width: 700px)": {
      height: "92vh",
      position: "relative",
      justifyContent: "space-between",
    },
  },
  name: {
    marginTop: "-8rem",
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: "25vw",
    "@media (min-width: 600px)": {
      marginTop: "5rem",
      fontSize: "25vw",
      lineHeight: ".8em",
    },
  },
  tagline: {
    lineHeight: "1em",
    fontSize: "16vw",
    fontWeight: "700",
    "@media (min-width: 700px)": {
      textAlign: "right",
      fontSize: "6vw",
      lineHeight: ".8em",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Fade duration={2000} triggerOnce>
          <Typography variant="h1" className={classes.name}>
            Giuseppe <br /> Mele
          </Typography>
        </Fade>
        <Fade delay={1000} duration={2000} triggerOnce>
          <Typography variant="h1" className={classes.tagline}>
            Developer. Designer.
          </Typography>
        </Fade>
      </div>
    </>
  );
};
export default Header;
