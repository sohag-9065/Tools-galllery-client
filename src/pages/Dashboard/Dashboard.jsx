
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <h2 className='text-3xl text-orange-300'>Dashboard</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="my-orders">My Orders</Link></li>
                    <li><Link to="review">Add A Review</Link></li>
                    <li><Link to="all-order">Manage All Orders</Link></li>
                    <li><Link to="make-admin">Make Admin</Link></li>
                    <li><Link to="manage-products">Manage Products</Link></li>
                    <li><Link to="profile">My Profile</Link></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;