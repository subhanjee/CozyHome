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
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem"
          }}
          container
          spacing={12}
        >
          <Grid item sm={12} md={6} lg={6}>
            <div>
              <h3 className="Roadheading1">
                To conclude this roadmap. We would first start by
                <br /> redesigning the website to have a new feel for what
                <br /> the future awaits, we would then like (5 days after
                <br /> sell out) to do a beta launch to crow minters only
                <br /> to show what the marketplace looks and feels like.
                <br /> This is our “first phrase” of our journey to success.
                <br /> We will then 1-2 weeks after this launch the
                <br /> marketplace to the public to list projects safely,
                <br /> buy and sell with ease. We then plan to expand
                <br /> into the metaverse and gaming in the future
                <br /> after this first phase is over. These free
                <br /> crows will allow lots of perks and early access
                <br /> to such events.”
              </h3>
            </div>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <div className="Giveawaydiv">
              <div className="Giveaway1">
                <h3>50%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">Website Redesign For Sell out</h3>
                <h3 className="Giveaway21">
                  We will be redesigning the whole website to feel and look
                  better for our
                  <br /> upcoming plans when we sell out!”
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway12">
                <h3>100%</h3>
              </div>
              <div>
                <h3 className="Giveaway2">Solana NFT Marketplace Launch</h3>
                <h3 className="Giveaway21">
                  We’ve been working on a Solana NFT Marketplace for quite some
                  time.5
                  <br /> days after we sell out we will launch in beta version
                  for crow owners
                  <br /> only a Solana NFT Marketplace where crow minters can
                  get a feel of
                  <br /> our marketplace we will be releasing to the public 1-2
                  <br /> weeks after crow minters get access
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem" }} className="Giveawaydiv">
              <div className="Giveaway13">
                <h3>after sell out</h3>
              </div>
              <div>
                <h3 className="Giveaway2">
                  1-2 weeks after nft marketplace launch for crow minters
                </h3>
                <h3 className="Giveaway21">
                  our marketplace will be released to the public. So to <br />
                  reiterate, 5 days after we sell out, we will beta <br /> launch the
                  nft marketplace for crow minters <br /> only. 1-2 weeks after this we
                  will launch the marketplace to the public
                </h3>
              </div>
            </div>
            <div style={{ marginTop: ".8rem",marginRight: "1rem" }} className="Giveawaydiv">
              <div className="Giveaway14">
                <h3>future plans</h3>
              </div>
              <div>
                <h3 className="Giveaway2">Metaverse/gaming</h3>
                <h3 className="Giveaway21">
                  after everything is released and is flowing ,<br /> we would like to
                  look  into expanding into the metaverse and gaming
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
