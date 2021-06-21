import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountTypeContext, UserContext } from "../../../App";

const TopNavBar = ({ home, applications, login, profile }) => {
  const [user] = useContext(UserContext);
  const [accountType, setAccountType] = useContext(AccountTypeContext);

  useEffect(() => {
    fetch(`https://desolate-forest-54482.herokuapp.com/check-account-type?email=${user.email}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [user, setAccountType]);

  return (
    <nav className="navbar navbar-expand-md navbar-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fs-1" to="/">
          Career Grow Up
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <Link to="/home" className={`nav-link fs-3 ${home ? 'border-bottom border-3 bg-light rounded-3' : ''}`}>
                Home
              </Link>
            </li>
            {
              accountType === 'job seeker' &&
              <li className="nav-item ms-3">
                <Link to="/profile" className={`nav-link fs-3 ${profile ? 'border-bottom border-3 bg-light rounded-3' : ''}`}>
                  Profile
                </Link>
              </li>
            }
            {
              user.name ? <>

                {
                  accountType === 'employer' &&
                  <li className="nav-item ms-3">
                    <Link to="/dashboard" className={`nav-link fs-3 ${profile ? 'border-bottom border-3 bg-light rounded-3' : ''}`}>
                      dashboard
                    </Link>
                  </li>
                }
                {
                  accountType === 'admin' &&
                  <li className="nav-item ms-3">
                    <Link to="/admin" className={`nav-link fs-3 ${profile ? 'border-bottom border-3 bg-light rounded-3' : ''}`}>
                      Admin Panel
                    </Link>
                  </li>
                }
              </>

                : <li className="nav-item ms-3">
                  <Link to="/login" className={`nav-link fs-3 ${login ? 'border-bottom border-3 bg-light rounded-3' : ''}`}>
                    Log In
                  </Link>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
