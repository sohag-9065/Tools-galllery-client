
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    // console.log(admin);

    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                {/* <h2 className='text-3xl text-orange-300'>Dashboard</h2> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-400 text-base-content space-y-4 ">
                    {/* <li><NavLink className='btn btn-primary'>Dashboard</NavLink></li>s */}
                    {
                        admin ?
                            <>
                                <li><NavLink to="manage-products" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>Manage Products</NavLink></li>
                                <li><NavLink to="all-order" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>Manage All Orders</NavLink></li>
                                <li><NavLink to="add-a-product" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white " : "btn btn-outline"}>Add A Product</NavLink></li>
                                <li><NavLink to="make-admin" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>Make Admin</NavLink></li>

                            </>

                            :
                            <>
                                <li><NavLink to="my-orders" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Orders</NavLink></li>
                                <li><NavLink to="review" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>Add A Review</NavLink></li>
                            </>


                    }
                    <li><NavLink to="profile" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Profile</NavLink></li>

                </ul>

            </div>
        </div>

    );
};

export default Dashboard;