import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const PostAJob = () => {
    const [user] = useContext(UserContext);
    const [jobPost, setJobPost] = useState({});

    const handleBlur = event => {
        const newJob = { ...jobPost };
        newJob[event.target.name] = event.target.value;
        setJobPost(newJob);
    }

    const handleTagInput = event => {
        const newJobwithTags = { ...jobPost };
        newJobwithTags[event.target.name] = event.target.value.split(/[ ,]+/);
        setJobPost(newJobwithTags);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newJobPost = { ...jobPost };
        newJobPost.name = user.name;
        newJobPost.email = user.email;
        newJobPost.postedTime = new Date();

        fetch('https://desolate-forest-54482.herokuapp.com/add-job-post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJobPost),
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Job Posted Successfully\nPlease wait for Approval');
                } else {
                    alert('Unexpected Error');
                }
            })
            .catch(() => alert('Unexpected Error'));
    }

    return (
        <section className='container row mx-auto justify-content-center'>
            <div className="col-lg-6 col-md-9 col-sm-12">
                <h3>Post a Job</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="jobTitle" className='form-label' >Job Title</label>
                        <input type="text" onBlur={handleBlur} name='jobTitle' id='jobTitle' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="companyName" className='form-label' >Company Name</label>
                        <input type="text" onBlur={handleBlur} name='companyName' id='companyName' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="jobDescription" className='form-label' >Job Description</label>
                        <textarea onBlur={handleBlur} name="jobDescription" id='jobDescription' className='form-control' cols="30" rows="10"></textarea>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="tags" className='form-label' >Tags</label>
                        <input onBlur={handleTagInput} type="text" name='tags' id='tags' className='form-control' placeholder="Type some Tags side by side" />
                    </div>
                    <button type="submit" className="btn btn-secondary">POST</button>
                </form>
            </div>
        </section>
    );
};

export default PostAJob;