import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./collectiontwo.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function CollectionTwo() {
  //   const classes = useStyles();
  return (
    <div className="maincollectionTwo">
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
          <Grid className="imgcol12" item sm={12} md={4} lg={4}>
            <div className="imgdiv1">
              <img
                className="collectionTwoimg"
                src="gif4.jpg"
                alt=""
              />
            </div>
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <div className="imgdiv1">
              <img
                className="collectionTwoimg"
                src="gif2.jpg"
                alt=""
              />
            </div>
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <div className="imgdiv1">
              <img
                className="collectionTwoimg"
                src="gif3.jpg"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CollectionTwo;
