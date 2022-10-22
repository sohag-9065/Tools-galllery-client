import React from 'react';
import { Button, Card } from 'react-daisyui';

const MyOrderCard = ({ tool, setDeleteProduct }) => {
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
                    <div className='flex justify-between mt-4'>
                        <label onClick={() => setDeleteProduct(tool)} htmlFor="delete-confirm-modal" className="btn  btn-error">Cancel</label>

                        <Button color="info">Payment</Button>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrderCard;