import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Applications from './components/Applications/Applications/Applications';
import LogIn from './components/LogIn/LogIn/LogIn';
import { createContext, useState } from 'react';
import Profile from './components/Profile/Profile';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/applications'>
            <Applications />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
