import React from 'react';
import ToolCard from './ToolCard';

const LatestTools = () => {
    const tools = [1,2,3]
    return (
        <div className='py-20'>
            <h1 className='text-4xl text-center text-lime-500 my-12 font-semibold'>Latest Tools</h1>
            <div className='bg-orange-100 mx-4 lg:mx-12 py-12 px-2 lg:px-10 rounded-2xl'>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-6 '>
                    {
                        tools.map((tool, index) => <ToolCard
                        key={index}
                        tool={tool}
                        >
                        </ToolCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default LatestTools;