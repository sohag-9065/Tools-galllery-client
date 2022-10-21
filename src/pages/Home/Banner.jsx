import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome To Tools Gallery</h1>
                    <p className="py-6 text-2xl">The biggest Tool-kit Shop for your house. Just find your ones and place the order</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;