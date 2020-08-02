import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
      boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.3)"
    },
  }));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <nav className="footer">
          <div className="leftSide">
            <Typography variant="subtitle1">
              <Link to="/terms" className="link">
                Terms of Use
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link to="/help" className="link">
                Help
              </Link>
            </Typography>
          </div>
          <div className="rightSide">
            <a href="https://www.facebook.com" target="_blank" className="link" rel="noopener noreferrer">
              <FacebookIcon></FacebookIcon>
            </a>
            <a href="https://www.instagram.com" target="_blank" className="link" rel="noopener noreferrer">
              <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="link" rel="noopener noreferrer">
              <LinkedInIcon></LinkedInIcon>
            </a>
            <a href="https://www.twitter.com" target="_blank" className="link" rel="noopener noreferrer">
              <TwitterIcon></TwitterIcon>
            </a>
          </div>
        </nav>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/terms"></Route>
          <Route path="/jobs"></Route>
          <Route path="/help"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Footer;
