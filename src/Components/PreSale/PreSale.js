import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./presale.css";
// import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));
function RoadMap() {
  const classes = useStyles();
  return (
    <div className="MainPreSale">
      <div className={classes.root}>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          spacing={12}
        >
          <Grid className="prelogodiv" item sm={12} md={6} lg={5}>
            <img
              className="prelogo"
              src="https://www.cozyhomenft.com/static/media/presale.6d3f4b3e.png"
              alt=""
            />
          </Grid>
          <Grid className="prelogodiv" item sm={12} md={6} lg={7}>
            <div>
              <h1 className="preHeading">Presale</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "30rem",
                  marginTop: "1rem"
                }}
              >
                <div className="Ethdiv">
                  <h2>0.03 ETH</h2>
                </div>
                <div className="leftdiv">
                  <h2> 1000 LEFT</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "2rem" }}>
                <div>
                  <button className="btnMint1">Mint Now!</button>
                </div>
                <div>
                  <button className="btnMint2">*</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default RoadMap;
