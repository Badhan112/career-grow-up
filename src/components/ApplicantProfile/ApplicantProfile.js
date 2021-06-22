import React from 'react';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const ApplicantProfile = () => {
    return (
        <>
            <header>
                <TopNavBar applicantProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Applicant Profile</h1>
                </section>
            </main>
        </>
    );
};

export default ApplicantProfile;