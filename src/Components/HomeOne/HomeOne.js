import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./homeone.css";
// import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));
function HomeOne() {
  const classes = useStyles();
  return (
    <div className="Maindivhomeone">
      <div className={classes.root}>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          spacing={12}
        >
          <Grid className="col1" item sm={12} md={6} lg={6}>
            <div >
              <img className="gif" src="marker.gif" alt=""/>
            </div> 
          </Grid>
          <Grid item sm={12} md={6} lg={6} style={{marginTop: "1rem"}}>
            <h1 className="mainheading">Cozy Home</h1>
            <h3 className="subheading">
            Each crow will have its own perks as well as benefits 🛫
            </h3>
            <h3 className="subheading">
            Crows are all free (excluding Solana gas fee) 🎉
            </h3>
            <h3 className="subheading">
            Max mint per wallet is 3! 🔥
            </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="btnMint">Mint Now!</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeOne;
