import React from 'react';
import { Button, Card } from 'react-daisyui';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool, children }) => {
    const { _id, supplier_name, tool_name, description, price, available_quantity, minimum_quantity, img } = tool;

    return (
        <div className='shadow-2xl rounded-2xl bg-white'>
            <Card >
                <Card.Image
                    src={img}
                    alt="Shoes"
                />
                <Card.Body className="">
                    <Card.Title tag="h2">{tool_name}</Card.Title>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Available Tool: {available_quantity}</p>
                    <p>Minimum Order: {minimum_quantity}</p>
                    <p><small>Supplier Name: {supplier_name}</small></p>
                    <Card.Actions className={(children ? "justify-between" : "justify-end")}>
                        <Link to={`/tool-purchase/${_id}`}  ><Button color="primary">Buy Now</Button> </Link>
                        {children}
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ToolCard;


