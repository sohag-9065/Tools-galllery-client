import React from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';

const ContactUs = () => {
    return (
        <Hero className='bg-slate-300 py-10 mb-20'>
            <Hero.Content className='w-2/4'>

                <Card className="flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <Card.Body>
                        <h1 className='text-4xl text-center mb-8 text-lime-500 mt-12 font-semibold'>Contact Us</h1>
                        <Form>
                            <Form.Label title="Name" />
                            <Input
                                type="text"
                                placeholder="name"
                                className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Email" />
                            <Input
                                type="email"
                                placeholder="email"
                                className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Subject" />
                            <Input
                                type="text"
                                placeholder="subject"
                                className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Message" />
                            <textarea className="textarea textarea-info" placeholder="Message"/> 
                        </Form>
                        
                        <Form className="mt-6">
                            <Button>Send Message</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
};

export default ContactUs;