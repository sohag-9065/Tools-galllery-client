import React from 'react';
import { Card } from 'react-daisyui';

const ToolCard = ({ tool, children }) => {
    const { _id ,supplier_name, tool_name, description, price, available_quantity, minimum_quantity, img } = tool;

    // console.log(_id);
    return (
        <div className='shadow-2xl rounded-2xl bg-white'>
            <Card >
                <Card.Image
                    src={img}
                    alt="Shoes"
                    className='h-96 w-full'
                />
                <Card.Body className="">
                    <Card.Title tag="h2">{tool_name}</Card.Title>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Available Tool: {available_quantity}</p>
                    <p>Minimum Order: {minimum_quantity}</p>
                    <p><small>Supplier Name: {supplier_name}</small></p>
                    
                    {children}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ToolCard;


