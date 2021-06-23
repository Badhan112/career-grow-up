import React, { useEffect, useState } from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import PostCard from '../PostCard/PostCard';

const AdminPanel = () => {
    const [pendingPost, setPendingPost] = useState([]);
    const [approvedPost, setApprovedPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5100/pending-post')
        .then(res => res.json())
        .then(data => setPendingPost(data));

        fetch('http://localhost:5100/approved-post')
        .then(res => res.json())
        .then(data => setApprovedPost(data));
    }, [])

    return (
        <>
            <header>
                <TopNavBar adminPanel={true} />
            </header>
            <main className='bg-light py-5'>
                <section className='container'>
                    <h3>Pending Job Post</h3>
                    <div className='row'>
                        {
                            pendingPost.map(post => <PostCard key={post._id} post={post} />)
                        }
                    </div>
                </section>
                <section className='container'>
                    <h3>Approved Job Post</h3>
                    <div className='row'>
                        {
                            approvedPost.map(post => <PostCard key={post._id} post={post} />)
                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default AdminPanel;