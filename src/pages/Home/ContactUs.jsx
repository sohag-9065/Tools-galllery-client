import React from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const handleSunmit = event => {
        event.preventDefault();
        event.target.reset();
        toast.success("Message Send Sucessfully")
    }
    return (
        <Hero className='bg-slate-300 py-10 mb-20'>
            <Hero.Content className='w-2/4'>

                <Card className="flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <Card.Body>
                        <h1 className='text-4xl text-center mb-8 text-lime-500 mt-12 font-semibold'>Contact Us</h1>
                        <form onSubmit={handleSunmit}>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <Input
                                type="text"
                                placeholder="name"
                                className="input-bordered w-full"
                            />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <Input
                                type="email"
                                placeholder="email"
                                className="input-bordered w-full"
                            />
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <Input
                                type="text"
                                placeholder="subject"
                                className="input-bordered w-full"
                            />
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-info w-full" placeholder="Message" />

                            <input type="submit" value="Send Message" className="btn mt-8 w-full"/>

                        </form>
                       
                        
                        
                        
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
};

export default ContactUs;