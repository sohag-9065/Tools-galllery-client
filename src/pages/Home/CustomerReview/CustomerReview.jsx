import React from 'react';
import ReviewCard from './ReviewCard';

const CustomerReview = () => {
    const reviews = [
        {
            name: "Rahim",
            comment: "Light was great.Same as picture. Packaging was also great.Recommended.Thanks a lot",
            star: "4/5"
        },
        {
            name: "Shakil",
            comment: "very high quality product. The light stand was so heavy and high quality build. lamp socket is very fresh and nice. overall very very good and quality product.",
            star: "4.5/5"
        },
        {
            name: " Mahabub",
            comment: "It is a good size and provides ample light, unlike smaller units. Happy with the purchase.",
            star: "5/5 "
        },
    ]
    return (
        <div className=' py-8'>
            <h1 className='text-4xl text-center mb-8 text-lime-500 mt-12 font-semibold'>Customer  Review</h1>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 justify-items-center bg-slate-300 mx-12 md:mx-20 lg:mx-40 py-20 px-6 lg:px-10 rounded-2xl'>
                {
                    reviews.map((review, index) =>  <ReviewCard
                    key={index}
                    review={review}
                    ></ReviewCard>)
                }
                
            </div>
        </div>
    );
};

export default CustomerReview;