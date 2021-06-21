import React, { useState } from "react";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";


const LogIn = () => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
      <header>
        <TopNavBar login={true} />
      </header>
      <main className="bg-light py-5">
        <section className="container row mx-auto justify-content-center">
          <div
            className="col-lg-5 col-md-8 col-sm-12 p-3 text-white rounded-3 text-center shadow"
            style={{ backgroundColor: "#D946EF" }}
          >
            <div className='bg-light p-3 logo-bg' >
              <FontAwesomeIcon size='3x' color='#1F2937' icon={faUserCircle} />
            </div>
            {
              isNewUser
                ? <SignUpForm />
                : <LogInForm />

            }
            <p className='mt-3'>or</p>
            <button onClick={() => setIsNewUser(!isNewUser)} className="btn btn-dark">{isNewUser ? 'Log In' : 'Sign Up'}</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default LogIn;
