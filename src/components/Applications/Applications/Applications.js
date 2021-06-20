import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const Applications = () => {
    return (
        <>
            <header>
                <TopNavBar applications={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Application</h1>
                </section>
            </main>
        </>
    );
};

export default Applications;