import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn/LogIn';
import { createContext, useState } from 'react';
import ApplicantProfile from './components/ApplicantProfile/ApplicantProfile';
import EmployerProfile from './components/EmployerProfile/EmployerProfile/EmployerProfile';
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import EmployerRoute from './components/Shared/EmployerRoute/EmployerRoute';
import AdminRoute from './components/Shared/AdminRoute/AdminRoute';
import ApplicantRoute from './components/Shared/ApplicantRoute/ApplicantRoute';
import EditApproval from './components/AdminPanel/EditApproval/EditApproval';

export const UserContext = createContext();
export const AccountTypeContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [accountType, setAccountType] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <AccountTypeContext.Provider value={[accountType, setAccountType]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/login'>
              <LogIn />
            </Route>

            <ApplicantRoute path='/applicant-profile'>
              <ApplicantProfile />
            </ApplicantRoute>

            <EmployerRoute path='/employer-profile'>
              <EmployerProfile />
            </EmployerRoute>

            <AdminRoute path='/admin-panel'>
              <AdminPanel />
            </AdminRoute>

            <AdminRoute path='/edit-approval/:id'>
              <EditApproval />
            </AdminRoute>

          </Switch>
        </Router>
      </AccountTypeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
