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
                src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7cf83b7e7557c9bf44/download/photo_2022-01-17_17-08-50.jpg"
                alt=""
              />
            </div>
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <div className="imgdiv1">
              <img
                className="collectionTwoimg"
                src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c80aa2f3219acad2ec5/download/photo_2022-01-17_17-09-05.jpg"
                alt=""
              />
            </div>
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <div className="imgdiv1">
              <img
                className="collectionTwoimg"
                src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7d58df8a198fd22619/download/photo_2022-01-17_17-08-54.jpg"
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
