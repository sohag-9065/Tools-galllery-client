import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../shared/Loading';
import ReviewCard from './ReviewCard';

const CustomerReview = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://vercel-deploy-tools-server-sohag-9065.vercel.app/review').then(res => res.json()),);
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(reviews);

    return (
        <div className=' py-8'>
            <h1 className='text-4xl text-center mb-8 text-lime-500 mt-12 font-semibold'>Customer  Review</h1>
            <div className='bg-slate-300 mx-12 md:mx-20 lg:mx-40 py-20 px-6 lg:px-10 rounded-2xl '>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 justify-items-center '>
                    {
                        reviews?.slice(0,3).map((review, index) => <ReviewCard
                            key={index}
                            review={review}
                        ></ReviewCard>)
                    }

                </div>
                <div className='text-center mt-12'>
                    <Link to="/all-reviews" className='btn  btn-primary'>All Reviews</Link>
                </div>
            </div>
            

        </div>
    );
};

export default CustomerReview;