import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <Router>
            <nav className="footer">
                <div className="leftSide">
                    <Link to="/terms" className="link">Terms of Use </Link>
                    <Link to="/jobs" className="link"> Jobs </Link>
                    <Link to="/help" className="link"> Help </Link>
                </div>
                <div className="rightSide">
                    <a href="www.facebook.com" target="_blank" className="link"><FacebookIcon></FacebookIcon></a>
                    <a href="www.instagram.com" target="_blank" className="link"><InstagramIcon></InstagramIcon></a>
                    <a href="www.linkedin.com" target="_blank" className="link"><LinkedInIcon></LinkedInIcon></a>
                    <a href="www.twitter.com" target="_blank" className="link"><TwitterIcon></TwitterIcon></a>
                </div>
            </nav>

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