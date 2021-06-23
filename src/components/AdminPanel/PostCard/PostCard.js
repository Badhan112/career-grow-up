import React from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { _id, jobTitle, companyName, jobDescription, name, email, approvalStatus, postedTime} = post;
    return (
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <div className='p-3 bg-white rounded-3 shadow h-100 position-relative'>
                <h3 className='mt-4 mb-3'>{jobTitle}</h3>
                <p><strong>Company:</strong> {companyName}, <strong>Posted By:</strong> {name}</p>
                <p><strong>Email:</strong> {email}, <strong>Post Time:</strong> {postedTime}</p>
                <h6>Description:</h6>
                <p>{jobDescription}</p>
                <p className='approval-status' ><strong>Status: </strong>{approvalStatus}</p>
                <Link to={`/edit-approval/${_id}`} className="btn btn-success">Change Approval</Link>
            </div>
        </div>
    );
};

export default PostCard;