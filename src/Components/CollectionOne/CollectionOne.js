import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./collection.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function CollectionOne() {
  //   const classes = useStyles();
  return (
    <div className="maincollectionOne">
      <div>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          container
          spacing={12}
        >
          <Grid className="imgcol1" item sm={12} md={4} lg={4}>
            <img
              className="collectionOneimg"
              src="gif4.jpg"
              alt=""
            />
          </Grid> 
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionOneimg"
              src="gif5.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="gif6.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CollectionOne;
