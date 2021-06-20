import React from 'react';

const JobCard = ({title, name, company, description, tags}) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <div className='h-100 p-3 shadow rounded-3' style={{backgroundColor: 'white'}}>
                <h3>{title}</h3>
                <p>by: {name}</p>
                <h5>{company}</h5>
                {/* <p>{description}</p> */}
            </div>
        </div>
    );
};

export default JobCard;