import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const AdminPanel = () => {
    return (
        <>
            <header>
                <TopNavBar adminPanel={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>Admin Panel</h1>
                </section>
            </main>
        </>
    );
};

export default AdminPanel;