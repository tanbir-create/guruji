import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import "./Banner.css";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/banner.jpg')`,
    height: "600px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  bannerText: {},
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero}>
        <div className="bannertext-container">
          <div className="img-cont">
            <img src="./images/guruji.png" />
          </div>
          <h1>GURUJI VEDA</h1>
          <h3>
            The <strong>Perfect</strong> Skincare Routine
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
      </Box>
    </>
  );
};

export default Banner;
