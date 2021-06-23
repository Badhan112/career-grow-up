import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import TagChip from '../../Shared/TagChip/TagChip';
import './JobCard.css';

const JobCard = ({ job }) => {
    const { _id, jobTitle, name, email, companyName, jobDescription, postedTime, tags } = job;
    const [user] = useContext(UserContext);

    const handleClick = () => {
        const application = {
            jobId: _id,
            companyName,
            jobTitle,
            applicantName: user.name,
            applicantEmail: user.email,
            applicationTime: new Date(),
            employerName: name,
            employerEmail: email,
        }
        console.log(application);
        fetch('https://desolate-forest-54482.herokuapp.com/apply-job', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(application),
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Application Submited');
            } else{
                alert('Unexpected Error');
            }
        })
        .catch(() => alert('Unexpected Error'));
    }

    return (
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <div className='h-100 p-3 shadow rounded-3 position-relative' style={{backgroundColor: 'white'}}>
                <p className='date'>{new Date(postedTime).toDateString('dd/MM/yyyy')}</p>
                <h3 className='mt-5'>{jobTitle}</h3>
                <h5>Company: {companyName}</h5>
                <p>Posted By: {name}</p>
                <p>{jobDescription}</p>
                {
                    tags.map((tag, index) => <TagChip tag={tag} key={index} />)
                }
                <button onClick={handleClick} className="btn btn-success d-block mt-5 mx-auto">Apply</button>
            </div>
        </div>
    );
};

export default JobCard;