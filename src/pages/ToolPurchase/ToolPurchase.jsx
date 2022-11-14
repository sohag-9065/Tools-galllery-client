import React, { useState } from 'react';
import { Hero } from 'react-daisyui';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.config';
import Loading from '../shared/Loading';

const ToolPurchase = () => {
    const [user] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = useState('');
    const { toolId } = useParams();
    // console.log(user);

    const { data: tool, isLoading, refetch } = useQuery('services', () => fetch(`https://vercel-deploy-tools-server-sohag-9065.vercel.app/tool/${toolId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()),);



    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, supplier_name, tool_name, description, price, available_quantity, minimum_quantity, img } = tool;

    const availabe_q = parseInt(available_quantity);
    const minimum_q = parseInt(minimum_quantity);

    const handOrder = event => {
        // const availabe_q = parseInt(available_quantity);
        // const minimum_q = parseInt(minimum_quantity);
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

        // update quantity 
        fetch(`https://vercel-deploy-tools-server-sohag-9065.vercel.app/tool/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.update?.acknowledged) {
                    handleOrderDatabase(order_quantity);
                    refetch();
                }
                console.log('tool   ', data);
            })
    }

    const handleOrderDatabase = (order_quantity) => {
        const tool = {
            user_name: user.name,
            email: user.email,
            tool_id: _id,
            tool_name: tool_name,
            order_quantity: order_quantity,
            price: price,
            img: img,
            description: description,
        }
        // sent to database of new tool information 
        fetch('https://vercel-deploy-tools-server-sohag-9065.vercel.app/order', {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(inserted => {

                if (inserted.acknowledged) {
                    toast.info('Order Added', { autoClose: 1000 })

                }
                else {
                    toast.error("Failed to order", { autoClose: 1000 });
                }
                console.log('Tool', inserted);
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const order_quantity = event.target.order_quantity.value;
        event.target.order_quantity.value = minimum_q;

        handleToolAvalableQuantity(order_quantity);
    }

    return (
        <div className='py-20'>
            <p className='text-center text-5xl font-bold  '>Tool : {tool_name}</p>
            <Hero className='min-h-[70vh]'>
                <Hero.Content>
                    <img
                        src={img}
                        className="max-w-lg rounded-lg shadow-2xl h-96 mr-20"
                        alt=''
                    />
                    <div>
                        <h1 className="text-2xl font-semibold mb-6">Tool Id: {_id}</h1>
                        <p className="pb-2">{description}</p>
                        <p className="pb-2">Supplier: {supplier_name}</p>
                        <p className="pb-2">Price: ${price}</p>
                        <p className="pb-2">Available Tool: {available_quantity}</p>
                        <p className="pb-2">Minimum Order : {minimum_quantity}</p>

                        {
                            availabe_q < minimum_q ?
                                <p className='text-red-500 font-medium text-3xl'>Stock Out</p>
                                :
                                <form onSubmit={handleSubmit}>
                                    <p className='mt-6 mb-2'>How many tools order?</p>
                                    <input onChange={handOrder} type="number" className=' border-2 p-3 mr-4 rounded-lg w-32' name='order_quantity' defaultValue={minimum_quantity}></input>
                                    <input type="submit" value="Order Confirm" className={(errorMessage || availabe_q < minimum_q ? "btn btn-disabled " : "btn btn-outline btn-info ")} />
                                </form>
                        }


                        <p className='text-red-500 font-medium '>{errorMessage}</p>

                    </div>
                </Hero.Content>
            </Hero>
        </div>
    );
};

export default ToolPurchase;