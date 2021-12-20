import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./collection.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function Collection() {
  //   const classes = useStyles();
  return (
    <div className="maincollection">
      <div> 
        <h1 className="collectionheading">Collection</h1>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: ".5rem"
          }}
          container
          spacing={12}
        >
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://www.cozyhomenft.com/static/media/ufo.8795956c.png"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://www.cozyhomenft.com/static/media/ktp.028e0c15.png"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://www.cozyhomenft.com/static/media/sade.56d6b944.png"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Collection;
