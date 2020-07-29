import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <Router>
            <nav className="header">
                <NavLink to="/" className='logo'>IGNITE</NavLink>
                <div className="links">
                    <NavLink to="/library" className="link" activeClassName='selected'>Library</NavLink>
                    <NavLink to="/store" className="link" activeClassName='selected'>Store</NavLink>
                    <NavLink to="/messages" className="link" activeClassName='selected'>Messages</NavLink>
                    <NavLink to="/news" className="link" activeClassName='selected'>News</NavLink>
                </div>
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