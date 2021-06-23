import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';

const EditApproval = () => {
    const { id } = useParams();
    const [jobPost, setJobPost] = useState({});
    const [newApprovalStatus, setNewApprovalStatus] = useState('');
    const history = useHistory();

    useEffect(() => {
        fetch(`https://desolate-forest-54482.herokuapp.com/job-details/${id}`)
            .then(res => res.json())
            .then(data => setJobPost(data));
    }, [id]);

    const { jobTitle, companyName, jobDescription, name, email, approvalStatus, postedTime } = jobPost;

    const handleChange = event => {
        setNewApprovalStatus(event.target.value);
    }

    const handleClick = () => {
        fetch(`https://desolate-forest-54482.herokuapp.com/edit-approval/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ approvalStatus: newApprovalStatus }),
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Status Updated');
                history.push('/admin-panel');
            } else{
                alert('Unexpected Error');
            }
        })
        .catch(() => alert('Unexpected Error'));
    }

    return (
        <>
            <header>
                <TopNavBar />
            </header>
            <main className='bg-light'>
                <section className='container row mx-auto py-5 justify-content-center'>
                    <div className='col-lg-6 col-md-9 col-sm-12 bg-white p-3 rounded'>
                        <select onChange={handleChange} name='approvalStatus' className="form-select">
                            <option selected defaultValue={approvalStatus}>{approvalStatus}</option>
                            <option defaultValue="pending">pending</option>
                            <option defaultValue="approved">approved</option>
                        </select>
                        <button onClick={handleClick} className="btn btn-primary my-3">Change</button>
                        <h2>Job Title: {jobTitle}</h2>
                        <h3>Company Name: {companyName}</h3>
                        <h4>Posted By: {name}, Email: {email}</h4>
                        <h5>Posted Time: {postedTime}</h5>
                        <h6>Job Description:</h6>
                        <p>{jobDescription}</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default EditApproval;