import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase/firebase.config';
import DeleteConfirmationModal from '../../shared/DeleteConfirmationModal';
import Loading from '../../shared/Loading';
import MyOrderCard from './MyOrderCard';
import PaymentModal from './PaymentModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);

    const url = "order";

    // useEffect( ,[])

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`https://vercel-deploy-tools-server-dmeivwp9y-sohag-9065.vercel.app/order/${user.email}`).then(res => res.json()),);

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
                            <div className='flex justify-between mt-4'>
                                {
                                    tool.payment_id ?
                                        <>
                                            <p className='border-2 p-1 font-semibold text-lg'>Transection ID: {tool.payment_id}</p>
                                        </>
                                        :
                                        <>
                                            <label onClick={() => setDeleteProduct(tool)} htmlFor="delete-confirm-modal" className="btn  btn-error">Cancel</label>
                                            <label onClick={() => setPaymentModal(tool)} htmlFor="delete-confirm-modal" className="btn  btn-info">Payment</label>
                                        </>
                                }



                            </div>

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
                {
                    paymentModal && <PaymentModal
                        paymentModal={paymentModal}
                        setPaymentModal={setPaymentModal}
                        refetch={refetch}
                    >
                    </PaymentModal>
                }
            </div>
        </div>
    );
};

export default MyOrders;