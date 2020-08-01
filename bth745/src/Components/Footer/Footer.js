import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }));

function Footer() {
    const classes = useStyles();
    return (
        <Router>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
            <nav className="footer">
                <div className="leftSide">
                    <Typography variant="subtitle1"><Link to="/terms" className="link">Terms of Use </Link></Typography>
                    <Typography variant="subtitle1"><Link to="/jobs" className="link"> Jobs </Link></Typography>
                    <Typography variant="subtitle1"><Link to="/help" className="link"> Help </Link></Typography>
                </div>
                <div className="rightSide">
                    <a href="www.facebook.com" target="_blank" className="link"><FacebookIcon></FacebookIcon></a>
                    <a href="www.instagram.com" target="_blank" className="link"><InstagramIcon></InstagramIcon></a>
                    <a href="www.linkedin.com" target="_blank" className="link"><LinkedInIcon></LinkedInIcon></a>
                    <a href="www.twitter.com" target="_blank" className="link"><TwitterIcon></TwitterIcon></a>
                </div>
            </nav>
            </AppBar>
            <Switch>
                <Route path="/terms">

                </Route>
                <Route path="/jobs">

                </Route>
                <Route path="/help">

                </Route>
            </Switch>
        </Router>
    );
}

export default Footer;