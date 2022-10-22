import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { user_name, photoURL, user_rating, user_review } = review;
    console.log(photoURL);
    return (
        <div className=" shadow  text-white min-h-[200px] min-w-[400px] p-6 bg-gray-600 rounded-3xl">
            <div className='flex  items-center gap-6'>
                {
                    photoURL ?
                        <img src={photoURL} alt="" className='rounded-full' />
                        :
                        <FaUserAlt className='w-16 h-16 text-center' />
                }
                <div className='text-start'>
                    <p>{user_name}</p>
                    <p>{user_rating}</p>
                </div>
            </div>
            <p className=' text-xl my-4'>{user_review}</p>
        </div>


    );
};

export default ReviewCard;