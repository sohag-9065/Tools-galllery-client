import React from 'react';
import { Rating } from 'react-daisyui';
import { FaUserAlt } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { user_name, photoURL, user_rating, user_review } = review;
    // console.log(photoURL);
    let value = user_rating;
    let ratings = [];
    while(value--) ratings[value] = 5;
     
    
    
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
                    <p className='text-2xl mb-3'>{user_name}</p>

                    <Rating   >
                        {
                            ratings.map((rat, index) => <Rating.Item key={index}  name="rating-2" className="mask mask-star-2 bg-orange-400" />)
                        }
                    </Rating>
                </div>
            </div>
            <div className="divider text-white" > </div>
            <p className=' text-xl my-4'>{user_review}</p>
        </div>


    );
};

export default ReviewCard;