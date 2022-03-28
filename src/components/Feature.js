import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    background: "#E6F5E9",
  },
  title: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  round: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "15px",
    background: "#EAFFEA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fea: {
    width: "100px",
    height: "100px",
  },
  roundContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  roundDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="" className={classes.container}>
        <Typography
          variant="h4"
          className={classes.title}
          sx={{ fontWeight: 600 }}
        >
          Features
        </Typography>
        <Grid
          container
          spacing={3}
          maxWidth="lg"
          sx={{ margin: "auto", width: "inherit" }}
        >
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{
                  background: "#AEDFB7 !important",
                  boxShadow: "0 15px 10px 10px rgba(125,125,125,0.3)",
                }}
              >
                <img className={classes.fea} src="./images/shop.png" />
              </Box>
              <Typography variant="h6">Shop</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/consult.png" />
              </Box>
              <Typography variant="h6">Consultancy</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/live.png" />
              </Box>
              <Typography variant="h6">Live Session</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/blog.png" />
              </Box>
              <Typography variant="h6">Blog</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Feature;
