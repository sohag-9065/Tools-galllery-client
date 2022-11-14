import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmationModal from '../../shared/DeleteConfirmationModal';
import Loading from '../../shared/Loading';
import MyOrderCard from '../MyOrders/MyOrderCard';

const ManageOrders = () => {
    const [deleteProduct, setDeleteProduct] = useState(false);


    const url = "order";

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`https://vercel-deploy-tools-server-sohag-9065.vercel.app/order`).then(res => res.json()),);

    if (isLoading) {
        return <Loading></Loading>

    }
    return (
        <div className=''>
            <h1 className='text-4xl text-center text-lime-500 my-12 font-semibold'>My Orders </h1>
            <div className='bg-orange-100 mx-4 lg:mx-12 py-12 px-2 lg:px-10 rounded-2xl'>
                {
                    tools.length < 1 && <p className='text-3xl text-center '>Please Order First!</p>
                }
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-6 '>
                    {
                        tools.map((tool, index) => <MyOrderCard
                            key={index}
                            tool={tool}

                        >
                            <p>User Email: {tool.email} </p>
                            {
                                tool.payment_id ?
                                    <>
                                        <p className='border-2 p-1 font-semibold text-lg'>Transection ID: {tool.payment_id}</p>
                                    </>
                                    :
                                    <>
                                        <label onClick={() => setDeleteProduct(tool)} htmlFor="delete-confirm-modal" className="btn  btn-error">Delete Order</label>
                                    </>
                            }
                        </MyOrderCard>)
                    }
                </div>
                {
                    deleteProduct && <DeleteConfirmationModal
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                        url={url}
                        refetch={refetch}
                    >
                    </DeleteConfirmationModal>
                }
            </div>
        </div>
    );
};
export default ManageOrders;