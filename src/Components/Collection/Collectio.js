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
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c811f189a884e7fd71d/download/photo_2022-01-17_17-09-08.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c80aa2f3219acad2ec5/download/photo_2022-01-17_17-09-05.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7f89f227862a42912a/download/photo_2022-01-17_17-09-00.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Collection;
