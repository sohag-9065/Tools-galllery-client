import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmationModal from '../../shared/DeleteConfirmationModal';
import Loading from '../../shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {

    const [deleteProduct, setDeleteProduct] = useState(false);

  
    const url = "user";


    const { data: users, isLoading , refetch } = useQuery('users', () => fetch('https://vercel-deploy-tools-server-sohag-9065.vercel.app/user',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()), );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>User</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                                setDeleteProduct={setDeleteProduct}
                            ></UserRow>)
                        }


                    </tbody>
                </table>

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
export default MakeAdmin;