import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import PostAJob from '../PostAJob/PostAJob';
import AllPostedJobs from '../AllPostedJobs/AllPostedJobs';

const EmployerProfile = () => {
    const [user] = useContext(UserContext);    

    return (
        <>
            <header>
                <TopNavBar employerProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container mb-5'>
                    <h1>{user.name}</h1>
                    <h3>Email: {user.email}</h3>
                </section>
                <PostAJob />
                <AllPostedJobs />
            </main>
        </>
    );
};

export default EmployerProfile;