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
              src="gif.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="gif2.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="gif3.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Collection;
