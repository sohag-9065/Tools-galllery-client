import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase/firebase.config';
import DeleteConfirmationModal from '../../shared/DeleteConfirmationModal';
import Loading from '../../shared/Loading';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteProduct, setDeleteProduct] = useState(false);

    // useEffect( ,[])

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:5000/order/${user.email}`).then(res => res.json()),);

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
                            setDeleteProduct={setDeleteProduct}
                        ></MyOrderCard>)
                    }

                </div>
                {
                    deleteProduct && <DeleteConfirmationModal
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                        refetch={refetch}
                    >
                    </DeleteConfirmationModal>
                }
            </div>
        </div>
    );
};

export default MyOrders;