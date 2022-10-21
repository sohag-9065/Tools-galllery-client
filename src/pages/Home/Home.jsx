import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CustomerReview from './CustomerReview/CustomerReview';
import LatestTools from './LatestTools/LatestTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestTools></LatestTools>
            <BusinessSummary></BusinessSummary>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;