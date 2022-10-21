import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, comment, star } = review;
    return (
        <div className=" shadow text-center text-white min-h-[200px] p-6 bg-gray-600 rounded-3xl">
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p className=' text-xl my-4'>{comment}</p>
            <p className='text-xl'>Rating: {star}</p>
        </div>


    );
};

export default ReviewCard;