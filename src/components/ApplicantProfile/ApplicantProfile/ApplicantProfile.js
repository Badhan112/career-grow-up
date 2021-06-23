import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import ApplicationCard from '../ApplicationCard/ApplicationCard';

const ApplicantProfile = () => {
    const [user] = useContext(UserContext);
    const [applications, setApplication] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-forest-54482.herokuapp.com/submited-application/${user.email}`)
            .then(res => res.json())
            .then(data => setApplication(data));
    }, [user.email]);

    return (
        <>
            <header>
                <TopNavBar applicantProfile={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h3>Name: {user.name}</h3>
                    <h5>Email: {user.email}</h5>
                </section>
                <section className='container mt-5'>
                    <h3>All Applications:</h3>
                    <div className='row'>
                        {
                            applications.map(application => <ApplicationCard application={application} key={application._id} />)
                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default ApplicantProfile;