import React from 'react';

const LogInForm = () => {
    return (
        <>
            <h3 className='my-4'>LOG IN</h3>
            <form action="">
                <input type="email" placeholder='Your Email' className='form-control' />
                <input type="password" placeholder='PASSWORD' className='form-control mt-3' />
                <button className="btn btn-light mt-3">Log In</button>
            </form>
        </>
    );
};

export default LogInForm;