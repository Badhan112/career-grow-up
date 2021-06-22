import React from 'react';

const PostedJobCard = ({ post }) => {
    const { jobTitle, companyName, approvalStatus } = post;
    return (
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <div className='p-3' style={{ backgroundColor: 'white' }}>
                <h3>{jobTitle}</h3>
                <h5>{companyName}</h5>
                <p>{approvalStatus}</p>
            </div>
        </div>
    );
};

export default PostedJobCard;