import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import PostAJob from '../PostAJob/PostAJob';
import AllPostedJobs from '../AllPostedJobs/AllPostedJobs';

const EmployerProfile = () => {
    const [user] = useContext(UserContext);

    const { name, email, packageRenewalDate, remainingJobPost } = user;

    return (
        <>
            <header>
                <TopNavBar employerProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container mb-5'>
                    <h1>{name}</h1>
                    <h3>Email: {email}</h3>
                    <h4>Remaining Job Post: {remainingJobPost}</h4>
                    <h4>Your Package Offer Update in: {new Date(packageRenewalDate).toDateString('dd/MM/yyyy')}</h4>
                </section>
                <PostAJob />
                <AllPostedJobs />
            </main>
        </>
    );
};

export default EmployerProfile;