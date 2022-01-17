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
                <h1 className="mainmetaheading">HungryCrows</h1>
                <h3 className="submetaheading">
                  🔑What is HungryCrows?
                  <br /> 〽️HungryCrows is a evolutionary 2222 series being
                  <br />
                  minted away for free. We plan to addvalue
                  <br /> to these crows and scarcity through the
                  <br /> technology we build and launch such as
                  <br />
                  our Solana nft marketplace!
                </h3>
                <h3 className="submetaheading">
                  🔑Is this instant reveal?
                  <br />
                  〽️Yes
                </h3>
                <h3 className="submetaheading">
                  🔑What is the total cost? <br />
                  〽️ 0, excluding gas fee which is $0.0025
                </h3>
                <h3 className="submetaheading">
                  🔑What are the socials? <br />
                  〽️ All of our socials are located in our twitter <br />{" "}
                  @HungryCrowsNFT
                </h3>
                <h3 className="submetaheading">
                  🔑Do admins message first in the discord server? <br />
                  〽️No
                </h3>
              </div>
            </div>
          </Grid>
          <Grid
            className="col11"
            item
            sm={12}
            md={6}
            lg={6}
            className="gifdiv111"
          >
            <div style={{ marginTop: "4rem" }}>
              <img className="gif2" src="marker.gif" alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MetaHome;
