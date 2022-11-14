import React from 'react';
import { toast } from 'react-toastify';

const PaymentModal = ({ paymentModal, setPaymentModal, refetch }) => {
    const { tool_id, tool_name, price, order_quantity } = paymentModal;


    const handlePaymentButton = () => {

        // update quantity 
        fetch(`https://vercel-deploy-tools-server-sohag-9065.vercel.app/order/${tool_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    toast.info('Payment Done Sucessfully', { autoClose: 1000 })
                    refetch();
                }
                setPaymentModal(null)
                console.log('tool   ', data);
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500">Tool Name: {tool_name}</h3>
                    <p>Amount: ${price * parseInt(order_quantity)}</p>
                    <input type="number" placeholder='Type Amount' className='p-2 mt-2 border-2' />
                    {/* <p>Total orders: {order_quantity}</p>
                    <p>Total Price: ${price * parseInt(order_quantity)}</p> */}
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm ">Cancel</label>
                        <button onClick={handlePaymentButton} className="btn btn-sm btn-success">Payment Confirm</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PaymentModal;