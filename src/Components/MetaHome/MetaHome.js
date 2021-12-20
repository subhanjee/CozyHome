import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./metahome.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   }
// }));
function MetaHome() {
  // const classes = useStyles();
  return (
    <div className="MaindivMetahome">
      <div>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          spacing={12}
        >
          <Grid item sm={12} md={6} lg={6}>
            <div className="headingdiv">
              <div className="subheadingdiv">
                <h1 className="mainmetaheading">MetaHomes</h1>
                <h3 className="submetaheading">
                  🔑Why you should buy a Cozy Home?
                  <br /> 〽️Own a real part of our Cozy Neighborhood
                  <br /> and be part of the Cozy Community.
                </h3>
                <h3 className="submetaheading">
                  〽️Generate revenue on your investment by
                  <br /> managing a Bed and Breakfast.
                </h3>
                <h3 className="submetaheading">
                  〽️Link your Cozy Homes throughout the
                  <br /> Metaverse to appear in virtual spaces (i.e.
                  <br /> Decentraland, or VR Reality Spaces).
                </h3>
                <h3 className="submetaheading">
                  〽️Get ~31.6% chance to win the biggest
                  <br /> giveaways of NFT History (we invest into our
                  <br /> community with 🏎️ 1 Porsche + 📱 100*iPhone 13
                  <br />
                  Pro + 💵 5* 10,000$, 200* 500$ + 🏡
                  <br /> Purchased Metaverse Land *worth ETH).
                </h3>
              </div>
            </div>
          </Grid>
          <Grid className="col11" item sm={12} md={6} lg={6}>
            <div style={{ marginTop: "5rem" }}>
              <img
                className="gif2"
                src="https://www.cozyhomenft.com/static/media/cadi.24e99993.png"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MetaHome;
 