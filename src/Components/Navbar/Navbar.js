import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./navbar.css";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div >
      <AppBar style={{ backgroundColor: "rgb(18, 20, 32)" }} position="fixed">
        <Container fixed>
          <Toolbar>
            <div className="btnnav">
              <Button className="btn1">home</Button>
              <Button className="btn1">about</Button>
              <Button className="btn1">roadmap</Button>
              <Button className="btn1">team</Button>
            </div>
            <Typography variant="h6" className={classes.title}></Typography>
            <div className="btn2nav">
              <Button className="btn2">Connect Wallet</Button>
              <Button className="btn3">
                <TwitterIcon />
              </Button>
              <Button className="btn3">
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwt5C44jpf2BKbTEmZWewvlQqqN7HZeTesg&usqp=CAU"
                  alt=""
                />
              </Button>
              <Button className="btn3">
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VreMTT0sy1-Vorj6PNPzKxVQd36fornGtA&usqp=CAU"
                  alt=""
                />
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
