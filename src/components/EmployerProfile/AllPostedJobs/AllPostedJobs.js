import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PostedJobCard from '../PostedJobCard/PostedJobCard';

const AllPostedJobs = () => {
    const [user] = useContext(UserContext);
    const [postedJobs, setPostedJobs] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-forest-54482.herokuapp.com/employer-post/${user.email}`)
            .then(res => res.json())
            .then(data => setPostedJobs(data));
    }, [user.email]);

    return (
        <section className='container mt-5'>
            <h3>All Posted Jobs</h3>
            <div className="row">
                {
                    postedJobs.map(post => <PostedJobCard key={post._id} post={post} />)
                }
            </div>
        </section>
    );
};

export default AllPostedJobs;