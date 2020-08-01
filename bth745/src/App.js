import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Footer from './Components/Footer/Footer';
import MessageFriends from './Components/Messages/MessageFriends';

function App() {
  return (
    <div className="App">
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
          <Route exact path="/" />

          <Route path="/library" />

          <Route path="/store" />

          <Route path="/messages" component={MessageFriends} />

          <Route path="/news" />

          <Route path="/profile" />

        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
