import React from 'react';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const Profile = () => {
    return (
        <>
            <header>
                <TopNavBar profile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Profile</h1>
                </section>
            </main>
        </>
    );
};

export default Profile;