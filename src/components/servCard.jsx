import React from 'react';

const ServCard = ({ icon, title, content, bg }) => {
    return (
        <div className='bg-white rounded-xl p-4 relative'>
            <img className='absolute top-0 right-0' src={`icon-main/${bg}`} alt="" />
            <img src={`icon-main/${icon}`} alt="" />
            <div className="text-xl font-semibold my-2">{title}</div>
            <p className='text-6'>{content}</p>
        </div>
    );
}

export default ServCard;

