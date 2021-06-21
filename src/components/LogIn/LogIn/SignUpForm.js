import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePaymentForm from "./StripePaymentForm";

const stripePromise = loadStripe('pk_test_51IeOEIEqeo4UWiIa9FGmXl2bdQPA9pY6x3AKjIyj48N5gCWHIW8MrHb5sc9GKj4IbGCa8e6hJSTVatGVmHIiNGzi00eCFUjR07');

const SignUpForm = () => {
    const [typesOfAccount, setTypesOfAccount] = useState(null);
    const [newUser, setNewUser] = useState({});


    const handleInput = event => {
        const newUserInfo = { ...newUser };
        newUserInfo[event.target.name] = event.target.value;
        setNewUser(newUserInfo);
    }

    const createJobSeekerAccount = () => {
        console.log(newUser);
    }

    return (
        <div>
            <h3 className="my-4">SIGN UP</h3>
            {typesOfAccount ?
                <>
                    <input
                        type="text"
                        name="name"
                        onBlur={handleInput}
                        placeholder="Your Name"
                        className="form-control"
                    />
                    <input
                        type="email"
                        name="email"
                        onBlur={handleInput}
                        placeholder="Your Email"
                        className="form-control mt-3"
                    />
                    <input
                        type="password"
                        name="password"
                        onBlur={handleInput}
                        placeholder="Password"
                        className="form-control mt-3"
                    />
                    {
                        typesOfAccount === "employer" ? <>
                            <div class="form-floating mt-3">
                                <select onChange={handleInput} class="form-select" name="employerPackage" >
                                    <option selected>Employer Package</option>
                                    <option value="premium">Premium</option>
                                    <option value="standard">Standard</option>
                                    <option value="basic">Basic</option>
                                </select>
                                <label for="employerPackage" className='text-dark'>Select Best Package for You</label>
                            </div>
                            <Elements stripe={stripePromise}>
                                <StripePaymentForm newUser={newUser} />
                            </Elements>
                        </>
                            : <>
                                <button onClick={createJobSeekerAccount} className="btn btn-light my-3">Create a Job Seeker Account</button>
                                <p>or Sign Up with</p>
                                <FontAwesomeIcon icon={faGoogle} size="3x" cursor="pointer" />
                            </>
                    }

                </>
                : <>
                    <div
                        className="shadow p-4 rounded"
                        style={{ backgroundColor: "#6366F1" }}
                    >
                        <button onClick={() => setTypesOfAccount('employer')} className="btn btn-light">Employer</button>
                        <button onClick={() => setTypesOfAccount('job seeker')} className="btn btn-light ms-3">Job Seeker</button>
                    </div>
                </>
            }
        </div>
    );
};

export default SignUpForm;
