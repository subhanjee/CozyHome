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
            <div style={{ marginTop: "1rem" }}>
              <img
                className="gif"
                src="https://www.cozyhomenft.com/static/media/logo.3b99de8f.gif"
                alt=""
              />
            </div>
          </Grid>
          <Grid  item sm={12} md={6} lg={6}>
            <h1 className="mainheading">Cozy Home</h1>
            <h3 className="subheading">
              🔑 Every homeowner gets access to the private land of {" "}
              Ethereum<br /> with Cozy Homes within Metaverse. We are going to {" "}
              start the<br /> construction!
            </h3>
            <h3 className="subheading">
              🛏️ The fantastic realm is a piece of land on the Ethereum
              <br /> 
              Blockchain network that only those who know the secret shall
              have <br /> access to.
            </h3>
            <h3 className="subheading">
              🌲 And the unique cozy homes in this mythical fantastic land
              are <br /> only limited to 7999 in quantity and the deeds will be
              sold for  <br />  0.05 ETH.
            </h3>
            <div style={{display: "flex",  justifyContent: "center"}}>
              <button className="btnMint">Mint Now!</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeOne;
