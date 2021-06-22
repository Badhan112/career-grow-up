import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const EmployerProfile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <header>
                <TopNavBar employerProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h1>{ user.name }</h1>
                    <h3>Email: {user.email}</h3>
                </section>
                <section className='container row mx-auto'>
                    <h3>Post a Job</h3>
                    <form action="">
                        <div>
                            <label htmlFor="jobTitle">Job Title</label>
                            <input type="text" id='jobTitle' />
                            
                        </div>
                    </form>

                </section>
            </main>
        </>
    );
};

export default EmployerProfile;