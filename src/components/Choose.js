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
    paddingBottom: 65,
  },
  title: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  round: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: 25,
  },
  fea: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
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

const Choose = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Typography
          variant="h4"
          className={classes.title}
          sx={{ fontWeight: 600 }}
        >
          Why Choose Us
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
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/expert.png" />
              </Box>
              <Typography variant="h6">Our Experts</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/satisfied.png" />
              </Box>
              <Typography variant="h6">2 Million Satisfied Users</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box className={classes.round}>
                <img
                  className={classes.fea}
                  src="./images/money-back.png"
                  style={{
                    background: "#9AD7A6",
                    boxShadow: "0 15px 10px 10px rgba(125,125,125,0.3)",
                  }}
                />
              </Box>
              <Typography variant="h6">Money Back </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Box className={classes.roundDiv}>
              <Box
                className={classes.round}
                sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.1)" }}
              >
                <img className={classes.fea} src="./images/certified.png" />
              </Box>
              <Typography variant="h6">Certified Doctors</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Choose;
