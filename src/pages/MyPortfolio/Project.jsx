import React from 'react';

const Project = () => {
    return (
        <div className='flex justify-center items-center h-full bg-rose-50'>
            <div className="card  bg-base-100 shadow-xl image-full">

                <div className="card-body">
                <h2 className="card-title ">
                        <a href="https://a11-life-advice.web.app/" target="_blank" rel="noreferrer">
                        Course Selling Website: <span className='underline'>Life Advice</span>
                        </a>
                    </h2>
                    <h2 className="card-title ">
                        <a href="https://tools-gallery-91300.web.app/" target="_blank" rel="noreferrer">
                        Manufacturer management: <span className='underline'>Tools Gallery</span>
                        </a>
                    </h2>
                    <h2 className="card-title ">
                        <a href="https://fun-code-fa88c.web.app/" target="_blank" rel="noreferrer">
                        Online Courses: <span className='underline'>Fun Code</span>
                        </a>
                    </h2>

                </div>
            </div>
        </div>
    );
};

export default Project;