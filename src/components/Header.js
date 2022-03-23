import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import astro from "./images/astro.png";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#7AC88B", height: 90 }}>
        <Toolbar>
          {/* <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            News
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              width: 85,
              height: 85,
            }}
          >
            <NavLink to="/">
              <img
                src="./images/logo.png"
                style={{ width: 85, height: 85, cursor: "pointer" }}
              />
            </NavLink>
          </Box>
          <NavLink to="/">
            <Button
              className="head-btn"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "1.2rem",
                marginLeft: 2,
                borderRadius: 10,
                padding: 0,
                textDecoration: "none",
              }}
            >
              Home
            </Button>
          </NavLink>
          <NavLink to="/blog">
            <Button
              className="head-btn"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "1.2rem",
                marginLeft: 2,
                borderRadius: 10,
                padding: 0,
                textDecoration: "none",
              }}
            >
              Blogs
            </Button>
          </NavLink>
          <NavLink to="/blog">
            <Button
              className="head-btn"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "1.2rem",
                marginLeft: 2,
                borderRadius: 10,
                padding: 0,
                textDecoration: "none",
              }}
            >
              About Us
            </Button>
          </NavLink>
          <NavLink to="/blog">
            <Button
              className="head-btn"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "1.2rem",
                marginLeft: 2,
                borderRadius: 10,
                padding: 0,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
