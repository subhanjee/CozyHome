import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./team.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function Team() {
  //   const classes = useStyles();
  return (
    <div className="MainTeamdiv">
      <div>
      <h1 className="teamheading">Team</h1>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem"
          }}
          container
          spacing={12}
        >
          <Grid className="imgteam" item sm={12} md={3} lg={3}>
            <div className="colum">
              <div>
                <img
                  className="Teamimg"
                  src="https://www.cozyhomenft.com/static/media/egemen.794aa3e3.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="Egheading">Egemen</h2>
                <h5 className="headingfive">Project Manager</h5>
              </div>
            </div>
          </Grid>
          <Grid className="imgteam" item sm={12} md={3} lg={3}>
            <div className="colum">
              <div>
                <img
                  className="Teamimg"
                  src="https://www.cozyhomenft.com/static/media/elif.3f6ec939.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="Eghead">Elif</h2>
                <h5 className="headingfive">Designer</h5>
              </div>
            </div>
          </Grid>
          <Grid className="imgteam" item sm={12} md={3} lg={3}>
            <div className="colum">
              <div>
                <img
                  className="Teamimg"
                  src="https://www.cozyhomenft.com/static/media/akin.afa0e75e.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="Eghead">Akın</h2>
                <h5 className="headingfive">Developer</h5>
              </div>
            </div>
          </Grid>
          <Grid className="imgteam" item sm={12} md={3} lg={3}>
            <div className="colum">
              <div>
                <img
                  className="Teamimg"
                  src="https://www.cozyhomenft.com/static/media/burak.6758d656.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="Eghead">Burak</h2>
                <h5 className="headingfive">Social Media</h5>
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={{ marginTop: "2rem" }}>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              textDecoration: "underline white",
              fontFamily: "Fredoka One",
              fontWeight: "400"
            }}
          >
            Smart Contract !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
