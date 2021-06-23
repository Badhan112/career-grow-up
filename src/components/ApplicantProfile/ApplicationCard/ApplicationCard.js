import React from 'react';

const ApplicationCard = ({ application }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <div className='h-100 p-3 shadow rounded-3 position-relative' style={{backgroundColor: 'white'}}>
                <p className='date'>{new Date(application.applicationTime).toDateString('dd/MM/yyyy')}</p>
                <h3 className='mt-5'>{application.jobTitle}</h3>
                <h5>Company: {application.companyName}</h5>
                <p>Employer Name: {application.employerName}</p>
            </div>
        </div>
    );
};

export default ApplicationCard;