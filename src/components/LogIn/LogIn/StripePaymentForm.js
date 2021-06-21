import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const StripePaymentForm = ({ newUser }) => {
    const [user, setUser] = useContext(UserContext);
    let cardInfo = {};
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const handleCardSubmit = async () => {

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            alert(error);
        } else {
            cardInfo = paymentMethod.card;
        }
    };

    const sendDataToDB = employer => {
        fetch('https://desolate-forest-54482.herokuapp.com/add-employer', {
            method: 'POST',
            body: JSON.stringify(employer),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setUser(employer);
                    history.push('/home');
                } else {
                    alert('Unexpected Error');
                }
            })
            .catch(err => alert(err));
    }

    const handlePasswordSignUp = async (event) => {
        event.preventDefault();
        await handleCardSubmit();
        const employer = await {
            ...newUser,
            cardInfo
        };
        firebase.auth().createUserWithEmailAndPassword(employer.email, employer.password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.updateProfile({
                    displayName: employer.name,
                }).then(() => {
                    sendDataToDB(employer);
                }).catch((error) => {
                    alert(error);
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const handleGoogleSignUp = async () => {
        await handleCardSubmit();
        const employer = await {
            ...newUser,
            cardInfo
        };
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                employer.name = user.displayName;
                employer.email = user.email;
                sendDataToDB(employer);
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
        <>
            <form onSubmit={handlePasswordSignUp}>
                <div className='bg-white p-3 my-3 rounded'>
                    <CardElement />
                </div>
                <button type="submit" disabled={!stripe} className="btn btn-light my-3">Create a Employer Account</button>
            </form>
            <p>or Sign Up with</p>
            <FontAwesomeIcon onClick={handleGoogleSignUp} icon={faGoogle} cursor="pointer" size="3x" />
        </>
    );
};

export default StripePaymentForm;