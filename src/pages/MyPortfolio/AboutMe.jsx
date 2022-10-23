import React from 'react';

const AboutMe = () => {
    return (
        <div className='flex justify-center items-center h-full bg-rose-50'>
            <div className="card w-[450px] bg-base-100 shadow-xl image-full">

                <div className="card-body">
                    <h2 className="card-title">Name: Md. Sohag Hossain</h2>
                    <h2 className="card-title">Email: sohaghossain7th@gmail.com</h2>
                    <h2 className="card-title">Qualification: B.Sc in CSE</h2>
                    <h2 className="card-title">Post: MERN Stack Developer</h2>
                    <h2 className="card-title">Language: Bangla ,English, Hindi</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutMe;