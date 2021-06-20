import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const Home = () => {
    return (
        <div>
            <header>
                <TopNavBar home={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Home</h1>
                </section>
            </main>
        </div>
    );
};

export default Home;