import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from '../Home/CustomerReview/ReviewCard';
import Loading from '../shared/Loading';

const AllReview = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://vercel-deploy-tools-server.vercel.app/review').then(res => res.json()),);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' py-8 min-h-[80vh]'>
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

export default AllReview;