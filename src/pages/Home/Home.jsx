import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ContactUs from './ContactUs';
import CustomerReview from './CustomerReview/CustomerReview';
import LatestTools from './LatestTools/LatestTools';
import MobileApp from './MobileApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <LatestTools></LatestTools>
            <BusinessSummary></BusinessSummary>
            <CustomerReview></CustomerReview>
            {/* <MobileApp></MobileApp> */}
            {/* <ContactUs></ContactUs>  */}
        </div>
    );
};

export default Home;