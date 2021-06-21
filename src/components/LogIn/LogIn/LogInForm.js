import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const LogInForm = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const newUser = {};

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const handleBlur = event => {
        newUser[event.target.name] = event.target.value;
    }

    const handlePasswordSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const authUser = {
                    name: user.displayName,
                    email: user.email,
                }
                setUser(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                }
                setUser(newUser);
                history.push('/home');
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
        <>
            <h3 className='my-4'>LOG IN</h3>
            <input onBlur={handleBlur} type="email" placeholder='Your Email' name='email' className='form-control' />
            <input onBlur={handleBlur} type="password" placeholder='PASSWORD' name='password' className='form-control mt-3' />
            <button onClick={handlePasswordSignIn} className="btn btn-light my-3">Log In</button>
            <p>or Sign In with</p>
            <FontAwesomeIcon onClick={handleGoogleSignIn} icon={faGoogle} size="3x" cursor="pointer" />
        </>
    );
};

export default LogInForm;