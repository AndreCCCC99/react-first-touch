import logo from './logo.svg';
import './App.css';
import Home from './Views/Home'
import Profile from './Views/Profile'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/">App</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
              <App />
          </Route>
          <Route path="/Home">
              <Home />
          </Route>
          <Route path="/Profile">
              <Profile />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
