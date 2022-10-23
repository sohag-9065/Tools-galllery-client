import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Portfolio</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-400 text-base-content space-y-4 justify-center">
                    <li><NavLink to="about-me" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>About Me</NavLink></li>
                    <li><NavLink to="education" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>About Education</NavLink></li>
                    <li><NavLink to="project" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white " : "btn btn-outline"}>About Project</NavLink></li>
                    <li><NavLink to="technology" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>About Technology</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default MyPortfolio;