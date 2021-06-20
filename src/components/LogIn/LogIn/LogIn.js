import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const LogIn = () => {
    return (
        <>
            <header>
                <TopNavBar login={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Login</h1>
                </section>
            </main>
        </>
    );
};

export default LogIn;