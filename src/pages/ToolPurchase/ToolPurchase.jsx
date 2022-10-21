import React, { useState } from 'react';
import {Hero } from 'react-daisyui';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const ToolPurchase = () => {
    const tool = useLoaderData();
    // console.log(tool);
    const { _id, supplier_name, tool_name, description, price, available_quantity, minimum_quantity, img } = tool;
    const [errorMessage, setErrorMessage] = useState('');

    const handOrder = event => {
        const availabe_q = parseInt(available_quantity);
        const minimum_q = parseInt(minimum_quantity);
        const orders_q = parseInt(event.target.value);

        if (orders_q > availabe_q) {
            setErrorMessage(`You maximum order ${available_quantity} pieces. `);
        }
        else if (orders_q < minimum_q) {
            setErrorMessage(`You minimum order ${minimum_quantity} pieces. `)
        }
        else {
            setErrorMessage('')
        }

    }

    const handleToolAvalableQuantity = (order_quantity) => {

        const newQuantity = parseInt(available_quantity) - parseInt(order_quantity);

        const updateQuantity = { available_quantity: newQuantity };

        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.update?.acknowledged) {
                    toast.info('Quantity update', { autoClose: 500 })
                }

                console.log('Data  useToken', data);
            })
    }


    const handleSubmit = event => {
        event.preventDefault();
        const order_quantity = event.target.order_quantity.value;
        
        event.target.order_quantity.value = 3;
        handleToolAvalableQuantity(order_quantity);

    }
    return (
        <div className='py-20'>
            <p className='text-center text-3xl font-semibold'>Tool ID: {_id}</p>
            <Hero className='min-h-[70vh]'>
                <Hero.Content>
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl h-80"
                        alt=''
                    />
                    <div>
                        <h1 className="text-5xl font-bold mb-6">{tool_name}</h1>
                        <p className="pb-2">{description}</p>
                        <p className="pb-2">Supplier: {supplier_name}</p>
                        <p className="pb-2">Price: ${price}</p>
                        <p className="pb-2">Available Tool: {available_quantity}</p>
                        <p className="pb-2">Minimum Order : {minimum_quantity}</p>


                        <form onSubmit={handleSubmit}>
                            <p className='mt-6 mb-2'>How many tools order?</p>
                            <input onChange={handOrder} type="number" className=' border-2 p-3 mr-4 rounded-lg w-32' name='order_quantity' defaultValue='3'></input>
                            <input type="submit" value="Add" className={(errorMessage ? "btn btn-disabled " : "btn btn-outline btn-info ")} />
                        </form>

                        <p className='text-red-500 font-medium '>{errorMessage}</p>



                    </div>
                </Hero.Content>
            </Hero>
        </div>
    );
};

export default ToolPurchase;