import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id, tool_name, price, order_quantity} = deleteProduct;
    // console.log(deleteProduct);

    const handleDeleteButton = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                     console.log(data.deletedCount);
                     toast.info('Item Delete', { autoClose: 500 })
                     setDeleteProduct(null)
                     refetch();
                }

            })
        console.log(_id);
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500">Are you sure you want to delete tool: {tool_name}.</h3>
                    <p className="py-4">Delte from your orders.</p>
                    <p>Total orders: {order_quantity}</p>
                    <p>Total Price: ${price * parseInt(order_quantity)}</p>
                    <div className="modal-action">
                        <button onClick={handleDeleteButton} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs ">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;