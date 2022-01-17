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
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7d58df8a198fd22619/download/photo_2022-01-17_17-08-54.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionOneimg"
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7cf83b7e7557c9bf44/download/photo_2022-01-17_17-08-50.jpg"
              alt=""
            />
          </Grid>
          <Grid className="imgcol" item sm={12} md={4} lg={4}>
            <img
              className="collectionimg"
              src="https://trello.com/1/cards/61e55be2bd852a2116b1f291/attachments/61e55c7b7c44486aa272cc73/download/photo_2022-01-17_17-08-46.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CollectionOne;
