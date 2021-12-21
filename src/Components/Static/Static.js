import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./static.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function Static() {
  //   const classes = useStyles();
  return (
    <div className="staticdiv">
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
          <Grid className="staticmiddiv" item sm={12} md={2} lg={2}>
            <div className="wall">
              <p>wall</p>
            </div>
          </Grid>
          <Grid className="staticmiddiv " item sm={12} md={2} lg={2}>
            <div className="roof">
              <p>roof</p>
            </div>
          </Grid>
          <Grid className="staticmiddiv " item sm={12} md={2} lg={2}>
            <div className="windows">
              <p>windows</p>
            </div>
          </Grid>
          <Grid className="staticmiddiv " item sm={12} md={2} lg={2}>
            <div className="door">
              <p>door</p>
            </div>
          </Grid>
          <Grid className="staticmiddiv " item sm={12} md={2} lg={2}>
            <div className="accessory">
              <p>accessory</p>
            </div>
          </Grid>
          <Grid className="staticmiddiv " item sm={12} md={2} lg={2}>
            <div className="sky">
              <p>sky</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Static;
