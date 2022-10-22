import React from 'react';
import { Button, Card } from 'react-daisyui';

const MyOrderCard = ({ tool, children }) => {
    const { tool_id, img, tool_name, description, price, order_quantity } = tool;
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
                    <p>Tool Id: {tool_id}</p>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Total orders: {order_quantity}</p>
                    <p>Total Price: ${price * parseInt(order_quantity)}</p>
                    {children}
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrderCard;