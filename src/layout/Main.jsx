import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../pages/shared/FooterSection';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;