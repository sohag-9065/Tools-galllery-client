import React from 'react';
import Summary from './Summary';

const BusinessSummary = () => {
    
    const summeries = [
        {
            title: "TOTAL CUSTOMERS",
            quantity: "2K",
            time: "Jan 1st 2021 - Oct 21 2022"
        },
        {
            title: "EARNED REVIEWS",
            quantity: "1.5K+",
            time: "Jan 1st 2021 - Oct 21 2022"
        },
        {
            title: "RECEIVING POINT",
            quantity: "100+",
            time: " "
        },
    ]
    return (
        <div className=' py-8'>
            <h1 className='text-4xl text-center mb-8 text-lime-500 mt-12 font-semibold'>Business Summary</h1>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 justify-items-center bg-slate-300 mx-12 md:mx-20 lg:mx-40 py-20 px-6 lg:px-10 rounded-2xl'>
                {
                    summeries.map((summery, index) =>  <Summary
                    key={index}
                    summery={summery}
                    ></Summary>)
                }
                
            </div>
        </div>
    );
};

export default BusinessSummary;