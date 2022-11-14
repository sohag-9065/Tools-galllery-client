import React from 'react';
import { Button } from 'react-daisyui';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../shared/Loading';
import ToolCard from '../../shared/ToolCard';

const LatestTools = () => {
    const { data: tools, isLoading } = useQuery('all-tool', () => fetch('https://vercel-deploy-tools-server-sohag-9065.vercel.app/tools').then(res => res.json()),);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='py-20'>
            <h1 className='text-4xl text-center text-lime-500 my-12 font-semibold'>Latest Tools </h1>
            <div className='bg-orange-100 mx-4 lg:mx-12 py-12 px-2 lg:px-10 rounded-2xl'>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-6 '>
                    {
                        tools?.map((tool, index) => <ToolCard
                            key={index}
                            tool={tool}
                        >
                            <div className='flex justify-end'>
                                <Link to={`/tool-purchase/${tool._id}`} ><Button color="primary">Buy Now</Button> </Link>
                            </div>
                        </ToolCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default LatestTools;