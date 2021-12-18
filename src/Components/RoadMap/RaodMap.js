import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./roadmap.css";
// import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));
function RoadMap() {
  const classes = useStyles();
  return (
    <div className="Mainroad">
      <div className={classes.root}>
        <h1 className="Roadheading">Roadmap</h1>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          spacing={12}
        >
          <Grid item sm={12} md={6} lg={6}>
            <div>
              <h3 className="Roadheading1">
                Our main goal is to buy land (~10%
                <br /> Revenue will be re-invested) in the
                <br /> Metaverse (i.e. Sandbox or Decentralized
                <br /> Land will be decided with community votes)
                <br /> and allocate this land to the deed owners
                <br /> of Cozy Home via smart contracts.
              </h3>
              <h3 className="Roadheading1">
                Purchasing metaverse land after the sold-
                <br />
                out will help Cozy Homeowners to leverage
                <br /> their investments with the increasing value
                <br /> of virtual land. This land will be divided
                <br /> into 7999 token parcels. Those parcels will
                <br /> be attached to each Cozy Home' token
                <br />
                holder. Our plans include brand
                <br /> development within Ethereum Blockchain as
                <br /> a startup company, participate rarity tools
                <br /> contribution, giveaways (~10% of Revenue
                <br /> will be re-invested), and other gifts for
                <br /> deed owners.
              </h3>
            </div>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <div className="Giveawaydiv">
              <div className="Giveaway1">
                <h3>22.5%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  Giveaway Program Launch with Type-I
                </h3>
                <h3 className="Giveaway21">
                  🎄500$ gift for 200 Cozy Homeowners (After 1800 Sales).
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway12">
                <h3>47%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  Giveaway Program Launch with Type-II
                </h3>
                <h3 className="Giveaway21">
                  🎄500$ gift for 200 Cozy Homeowners (After 1800 Sales).
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway13">
                <h3>62%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  Giveaway Program Launch with Type-III
                </h3>
                <h3 className="Giveaway21">
                  🎄500$ gift for 200 Cozy Homeowners (After 1800 Sales).
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway14">
                <h3>80%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  Giveaway Program Launch with Type-IV
                </h3>
                <h3 className="Giveaway21">
                  🎄500$ gift for 200 Cozy Homeowners (After 1800 Sales).
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway15">
                <h3>100%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  Giveaway Program Launch with Type-I
                </h3>
                <h3 className="Giveaway21">
                  🎄500$ gift for 200 Cozy Homeowners (After 1800 Sales).
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default RoadMap;
