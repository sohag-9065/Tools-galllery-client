import React from 'react';
import { Button, Card } from 'react-daisyui';

const Tool = ({tool}) => {
    
    return (
        <div className='shadow-2xl rounded-2xl bg-white'>
            <Card >
                <Card.Image
                    src="https://i.ibb.co/0q07VC9/t1.jpg"
                    alt="Shoes"
                />
                <Card.Body className="">
                    <Card.Title tag="h2">Drill Machine - I</Card.Title>
                    <p>the strongest hammer for your job done</p>
                    <Card.Actions className="justify-end">
                        <Button color="primary">Buy Now</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tool;