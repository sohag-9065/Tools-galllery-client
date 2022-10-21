import React from 'react';
import { Button, Hero } from 'react-daisyui';

const MobileApp = () => {
    return (
        <Hero className='min-h-[80vh]'>
            <Hero.Content>
                <img
                    src="https://s3-ap-southeast-1.amazonaws.com/fchronicles/default/files/World-of-APPs.jpg"
                    className="max-w-lg rounded-lg shadow-2xl"
                    alt=''
                />
                <div className='ml-20'>
                    <h1 className="text-5xl font-bold">Download our free mobile app</h1>
                    <p className="py-6">
                        You can easily access our all features in one app and many more. Install to explore!
                    </p>
                    <Button color="primary">Download</Button>
                </div>
            </Hero.Content>
        </Hero>
    );
};

export default MobileApp;  