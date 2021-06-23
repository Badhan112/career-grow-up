import React from 'react';
import './TagChip.css';

const TagChip = ({ tag }) => {
    return (
        <p className='chip' >{tag}</p>
    );
};

export default TagChip;