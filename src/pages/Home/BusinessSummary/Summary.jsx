import React from 'react';
import { Stats } from 'react-daisyui';

const Summary = ({summery}) => {
    const {title, quantity, time} = summery;
    return (
        <div>
            <Stats  className="bg-gray-600 shadow text-center text-white w-80 min-h-[200px]">
                <Stats.Stat>
                     <h1 className='text-xl'>{title}</h1>
                     <p className='text-3xl font-bold text-lime-500'>{quantity}</p>
                     <p className='text-xl'>{time}</p>
                </Stats.Stat>
            </Stats>

        </div>
    );
};

export default Summary;