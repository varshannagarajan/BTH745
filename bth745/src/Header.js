import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <Router>
            <nav className="header">
                <Link to="/">Ignite</Link>
                <Link to="/library">Library</Link>
                <Link to="/store">Store</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/news">News</Link>
                <Link to="/profile"><AccountCircleIcon></AccountCircleIcon></Link>
            </nav>

            <Switch>
                <Route path="/">

                </Route>
                <Route path="/library">

                </Route>
                <Route path="/store">

                </Route>
                <Route path="/messages">

                </Route>
                <Route path="/news">

                </Route>
                <Route path="/profile">

                </Route>
            </Switch>

        </Router>
    );
}

export default Header;