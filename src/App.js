import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Applications from './components/Applications/Applications/Applications';
import LogIn from './components/LogIn/LogIn/LogIn';

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
