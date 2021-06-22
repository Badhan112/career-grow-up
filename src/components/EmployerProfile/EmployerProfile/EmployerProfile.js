import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const EmployerProfile = () => {
    return (
        <>
            <header>
                <TopNavBar employerProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Employer Profile</h1>
                </section>
            </main>
        </>
    );
};

export default EmployerProfile;